import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Genres, MovieDescriptionType, MoviesType } from '../types/tmdbTypes'

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
    getMovies: builder.query<MoviesType, void>({
      query: () => `movie/popular?page=1&api_key=${tmdbApiKey}`,
    }),
    getMovie: builder.query<MovieDescriptionType, string>({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
  }),
})

export const { useGetGenresQuery, useGetMoviesQuery, useGetMovieQuery } = tmdbApi

export default tmdbApi
