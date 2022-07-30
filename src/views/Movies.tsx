import HeroMovie from '@components/common/HeroMovie'
import MovieList from '@components/common/MovieList'
import { useGetMoviesQuery } from '@services/tmdbApi'
import type { MoviesType, MovieType } from '../types/tmdbTypes'

function Movies() {
  const { data, isError, isFetching } = useGetMoviesQuery()

  if (isFetching) {
    return (
      <div>
        <h1>Fetching</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <>
      <HeroMovie movie={data?.results[0] as MovieType} />
      <MovieList exclude={1} movies={data as MoviesType} />
    </>
  )
}

export default Movies
