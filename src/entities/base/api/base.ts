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
    }),
    getOneBook: build.query({
      query: id => ({
        url: `/books/${id}`,
        method: 'GET'
      })
    }),
    getAuthors: build.query({
      query: () => ({
        url: `/books/authors`,
        method: 'GET'
      })
    }),
    addBook: build.mutation({
      query: body => ({
        url: `/books/add`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Base']
    }),
    addFiles: build.mutation({
      query: body => ({
        url: `/books/upload`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Base']
    })
  })
});

export const {
  useGetBooksQuery,
  useGetOneBookQuery,
  useGetAuthorsQuery,
  useGetBooksListMutation,
  useAddBookMutation,
  useAddFilesMutation
} = baseApi;
