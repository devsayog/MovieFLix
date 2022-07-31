import { AiOutlineCheck } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import Rating from '@components/common/Rating'
import { imageUrl } from '@constants/appConstants'
import { useGetMovieQuery } from '@services/tmdbApi'
import { GenresIcons, GenresKeys } from '@components/common/sidebar/sidebarConstants'
import { MdOutlineLanguage, MdOutlineLocalMovies, MdOutlineTheaters } from 'react-icons/md'
import Spinner from '@components/common/Spinner'
import Error from '@components/common/Error'

function MovieDescription() {
  const { id } = useParams()
  const { data, isError, isFetching } = useGetMovieQuery(id as string)

  if (isFetching) {
    return <Spinner />
  }
  if (isError) {
    return <Error message="Oops!! Something went wrong. Please try again later!!" />
  }
  if (!data) {
    return (
      <Error message="Oops!! result not found.Please make sure you have entered valid url!!!!!" />
    )
  }

  return (
    <section className="pt-3">
      <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-4 justify-items-center">
        <img
          className="h-96 shadow-2xl rounded hover:scale-105 transition"
          src={`${imageUrl}w500/${data?.poster_path}`}
          alt={data?.title}
        />
        <article>
          <div className="flex flex-col md:items-start space-y-3">
            <div className="self-center content-center flex flex-col space-y-3 items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                {data?.title}
              </h2>
              <h4 className="heading-4 font-light">{data?.tagline}</h4>

              <div className="flex items-center justify-around space-x-3">
                <Rating count={data?.vote_average} />
                <p className="flex items-center space-x-1">
                  <AiOutlineCheck /> <span>Duration: {data.runtime}min</span>
                </p>
                <p className="flex items-center space-x-2">
                  <AiOutlineCheck /> <span> Language: {data.spoken_languages[0].name}</span>
                </p>
              </div>
              <div className="flex justify-around flex-wrap gap-3">
                {data.genres.map((genre) => {
                  const Icon = GenresIcons[genre.name as GenresKeys]
                  return (
                    <Link
                      to={`/${genre.id}`}
                      key={genre.id}
                      className="outline-btn flex items-center space-x-1"
                    >
                      <Icon />
                      <p>{genre.name}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
            <h5 className="heading-5">Overview</h5>
            <p className="paragraph font-light">{data.overview}</p>
            <div className="flex space-x-3">
              <a
                className="bg-btn flex items-center"
                href={data.homepage}
                rel="noopener noreferrer"
                target="_blank"
              >
                Website <MdOutlineLanguage />
              </a>
              <a
                className="bg-btn flex items-center"
                href={`https://www.imdb.com/title/${data?.imdb_id}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                IMDB <MdOutlineLocalMovies />
              </a>
              <button className="bg-btn flex items-center" type="button">
                Trailer <MdOutlineTheaters />
              </button>
            </div>
          </div>
        </article>
      </div>
      <figure className="flex flex-col space-y-3 md:space-y-4">
        <figcaption className="heading-5 p-1 md:p-2 border-b border-gray-500">Top Cast</figcaption>
        <div className="flex flex-wrap gap-3 justify-center">
          {data.credits.cast.slice(0, 6).map(
            (character) =>
              character.profile_path && (
                <Link
                  key={character.id}
                  to={`/actors/${character.id}`}
                  className="hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <figure className="relative w-28 flex flex-col space-y-1">
                    <img
                      className="block h-44 object-cover rounded"
                      src={`${imageUrl}w500/${character.profile_path}`}
                      alt={character.name}
                    />
                    <figcaption className="paragraph">{character.name}</figcaption>
                    <p className="paragraph text-gray-500">{character.character.split('/')[0]}</p>
                  </figure>
                </Link>
              ),
          )}
        </div>
      </figure>
      {/* TODO fetch recomented movie and display */}
    </section>
  )
}

export default MovieDescription
