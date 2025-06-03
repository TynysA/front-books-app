import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from '@/entities/user';

import { IAuthState } from './types';

const initialState: IAuthState = {
  isAuth: false,
  tokens: {
    access: null,
    refresh: null,
    apiGatewayAccess: null,
    apiGatewayRefresh: null
  },
  user: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    setCredentials: (state, { payload }) => {
      state.tokens.access = payload.accessToken;
    },
    setApiGatewayCredentials: (state, { payload }) => {
      state.tokens.apiGatewayAccess = payload.token;
    },
    setUserData: (state, { payload }) => {
      state.user = payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      if (!state.isAuth && payload?.token) {
        state.isAuth = true;
        state.tokens.access = payload.token;
        // state.tokens.refresh = payload.token.refreshToken;
      }
    });
  }
});

export const { setAuth, logout, setCredentials, setApiGatewayCredentials, setUserData } = authSlice.actions;
