import { api } from '@/app/api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    updateUserBg: build.mutation({
      query: formData => ({
        url: '/users/update-bg',
        method: 'PUT',
        body: formData
      }),
      invalidatesTags: ['User'] // <<< Вот это важно!
    }),
    getCurrentUser: build.query({
      query: () => '/users/me',
      providesTags: ['User'] // <<< Очень важно!
    })
  })
});

export const { useUpdateUserBgMutation, useGetCurrentUserQuery } = userApi;
