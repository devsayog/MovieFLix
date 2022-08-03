import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '@services/tmdbApi'
import { imageUrl } from '@constants/appConstants'
import { MdOutlineLocalMovies } from 'react-icons/md'
import Spinner from '@components/common/Spinner'
import Error from '@components/common/Error'
import MovieList from '@components/common/MovieList'
import Pagination from '@components/common/pagination/Pagination'

function ActorDescription() {
  const [page, setPage] = useState(1)
  const { id } = useParams()
  const { data, isFetching, isError } = useGetActorDetailsQuery(id as string)

  const {
    data: movies,
    isError: moviesError,
    isFetching: moviesFetching,
  } = useGetMoviesByActorIdQuery({
    id: id as string,
    page,
  })
  if (isFetching) {
    return <Spinner />
  }
  if (isError) {
    return <Error message="The resource you requested could not be found." />
  }
  if (!data) {
    return (
      <Error message="Oops!! result not found.Please make sure you have entered valid url!!!!!" />
    )
  }

  return (
    <section className="pt-3 flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-4 justify-items-center">
        <img
          className="h-96 shadow-2xl rounded hover:scale-105 transition"
          src={`${imageUrl}w780/${data?.profile_path}`}
          alt={data?.name}
        />
        <article>
          <div className="flex flex-col md:items-start space-y-3">
            <div className="self-center content-center flex flex-col space-y-3 items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                {data?.name}
              </h2>
              <h4 className="heading-4 font-light">
                {new Date(data?.birthday as string | number).toDateString()}
              </h4>
            </div>
            <p className="paragraph font-light">{data?.biography || 'No bio provided yet'}</p>

            <a
              className="bg-btn flex items-center self-start"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              IMDB <MdOutlineLocalMovies />
            </a>
          </div>
        </article>
      </div>
      <section>
        <h5 className="heading-5 p-1 md:p-2 border-b border-gray-500">
          More <span className="font-normal">{data?.name}</span> Movies
        </h5>
        {moviesError && <Error message="Oops!! Something went wrong. Please try again later!!" />}
        {moviesFetching && <Spinner />}
        {movies ? (
          <MovieList movies={movies} numberOfMovies={12} />
        ) : (
          <p className="heading-5 bg-green-600 p-3">Sorry nothing was found!!</p>
        )}
        {movies && (
          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={movies?.total_pages}
            totalResults={movies?.total_results}
          />
        )}
      </section>
    </section>
  )
}

export default ActorDescription
