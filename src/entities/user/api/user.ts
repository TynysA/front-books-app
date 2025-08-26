import { api } from '@/app/api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    likeBook: build.mutation({
      query: bookId => ({
        url: `/user/like-book/${bookId}`,
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),

    addToLibrary: build.mutation({
      query: bookId => ({
        url: `/user/add-to-library/${bookId}`,
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),

    updateUserBg: build.mutation({
      query: body => ({
        url: 'http://localhost:3000/user/update-bg',
        method: 'POST',
        body
      }),
      invalidatesTags: ['User']
    }),
    getUserBooks: build.query({
      query: () => ({
        url: '/user/combined-books',
        method: 'GET'
      }),
      providesTags: ['User']
    })
  })
});
export const { useLikeBookMutation, useAddToLibraryMutation, useUpdateUserBgMutation, useGetUserBooksQuery } = userApi;
