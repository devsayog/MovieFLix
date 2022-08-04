import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '@components/common/Error'
import HeroMovie from '@components/common/HeroMovie'
import MovieList from '@components/common/MovieList'
import Pagination from '@components/common/pagination/Pagination'
import Spinner from '@components/common/Spinner'
import { useGetMoviesQuery } from '@services/tmdbApi'
import Seo from '@components/common/Seo'
import type { MoviesType, MovieType } from '../types/tmdbTypes'

function Movies() {
  const [page, setPage] = useState(1)
  const { genreOrCat } = useParams()
  const { data, isError, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName: genreOrCat,
    page,
  })

  if (isFetching) {
    return <Spinner />
  }
  if (isError) {
    return <Error message="Oops!! Something went wrong. Please try again later!!" />
  }
  if (!data) {
    return <Error message="Oops!! something went wrong !!!!!" />
  }
  return (
    <>
      <Seo url={window.location.href} />
      <HeroMovie movie={data?.results[0] as MovieType} />
      <MovieList exclude={1} movies={data as MoviesType} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data?.total_pages}
        totalResults={data?.total_results}
      />
    </>
  )
}

export default Movies
