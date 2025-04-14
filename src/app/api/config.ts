import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  retry
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { baseHttp } from '@/app/configs';

const mutex = new Mutex();
const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: baseHttp,
    credentials: 'same-origin',
    prepareHeaders: (headers: Headers, api: Pick<BaseQueryApi, 'getState'>) => {
      const token = api.getState().auth.tokens.access;
      // const apiGatewayToken = api.getState().auth.tokens.apiGatewayAccess;
      if (token && api.endpoint !== 'sendSms') headers.set('Authorization', `Bearer ${token}`);
      // if (api.endpoint === 'addFileData' || api.endpoint === 'removeFileData' || api.endpoint === 'getFileData')
      //   headers.set('Authorization', `Bearer ${apiGatewayToken}`);
      return headers;
    }
  }),
  { maxRetries: 0 }
);

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const refreshToken = api.getState().auth.tokens.refresh;
      api.dispatch({ type: 'auth/setCredentials', payload: { accessToken: null } });
      try {
        const refreshResult = await baseQuery(
          { url: '/inline/api/auth/refresh', method: 'POST', body: { refreshToken } },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch({ type: 'auth/setCredentials', payload: refreshResult.data.token });
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch({ type: 'auth/logout' });
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const refreshToken = api.getState().auth.tokens.apiGatewayRefresh;
      api.dispatch({ type: 'auth/setApiGatewayCredentials', payload: { token: null } });
      try {
        const refreshResult = await baseQuery(
          {
            url: `${baseHttpGateway}/api/identity/authentication/GetTokenByRefresh`,
            method: 'POST',
            body: { refreshToken }
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch({ type: 'auth/setApiGatewayCredentials', payload: refreshResult.data.token });
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch({ type: 'auth/logout' });
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Auth', 'Base'],
  endpoints: () => ({})
});
