import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Genres } from '../types/tmdbTypes'

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY as string

const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
  }),
})

export const { useGetGenresQuery } = tmdbApi

export default tmdbApi
