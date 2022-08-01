import Error from '@components/common/Error'
import HeroMovie from '@components/common/HeroMovie'
import MovieList from '@components/common/MovieList'
import Spinner from '@components/common/Spinner'
import { useGetMoviesQuery } from '@services/tmdbApi'
import { useParams } from 'react-router-dom'
import type { MoviesType, MovieType } from '../types/tmdbTypes'

function Movies() {
  const { genreOrCat } = useParams()
  const { data, isError, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName: genreOrCat,
  })

  if (isFetching) {
    return <Spinner />
  }
  if (isError) {
    return <Error message="Oops!! Something went wrong. Please try again later!!" />
  }

  return (
    <>
      <HeroMovie movie={data?.results[0] as MovieType} />
      <MovieList exclude={1} movies={data as MoviesType} />
    </>
  )
}

export default Movies
