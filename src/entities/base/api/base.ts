import { api } from '@/app/api';

export const baseApi = api.injectEndpoints({
  endpoints: build => ({
    getBooks: build.query({
      query: () => ({
        url: `/books`,
        method: 'GET'
      }),
      providesTags: ['Base']
    }),
    getBooksList: build.mutation({
      query: body => ({
        url: `/books/getAll`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Base']
    })
  })
});

export const { useGetBooksQuery, useGetBooksListMutation } = baseApi;
