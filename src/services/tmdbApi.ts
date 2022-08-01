import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ActorDetailsType, Genres, MovieDescriptionType, MoviesType } from '../types/tmdbTypes'

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY as string

const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    getMovie: builder.query<MovieDescriptionType, string>({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    getRecommendation: builder.query<MoviesType, string>({
      query: (id) => `/movie/${id}/recommendations?api_key=${tmdbApiKey}`,
    }),
    getActorDetails: builder.query<ActorDetailsType, string>({
      query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
    }),
    getMoviesByActorId: builder.query<any, string>({
      query: (id) => `/discover/movie?with_cast=${id}&page=1&api_key=${tmdbApiKey}`,
    }),
    getMovies: builder.query<MoviesType, GetMoviesParamsType>({
      // to do search ---> search functionality
      // page -----> pagination
      query: ({ genreIdOrCategoryName }) => {
        // check genreIdOrCategoryName is Number or String
        // Number() check return NaN if string
        // !! check for undefined ie. when no genresOrCats is provided
        const value = !!genreIdOrCategoryName && Number(genreIdOrCategoryName)
        let url = `movie/popular?page=1&api_key=${tmdbApiKey}`
        if (typeof value === 'number') {
          url = `discover/movie?with_genres=${value}&page=1&api_key=${tmdbApiKey}`
        }
        if (Number.isNaN(value)) {
          url = `movie/${genreIdOrCategoryName}?page=1&api_key=${tmdbApiKey}`
        }
        return url
      },
    }),
  }),
})
type GetMoviesParamsType = {
  genreIdOrCategoryName?: number | string
}

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationQuery,
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
} = tmdbApi

export default tmdbApi
