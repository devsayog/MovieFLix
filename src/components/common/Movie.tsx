import { imageUrl } from '@constants/appConstants'
import { Link } from 'react-router-dom'
import type { MovieType } from '../../types/tmdbTypes'
import Rating from './Rating'
import Tooltip from './Tooltip'

interface MovieProps {
  movie: MovieType
}
function Movie({ movie }: MovieProps) {
  return (
    <div className="p-3 rounded dark:shadow-slate-700 shadow-md dark:bg-gray-800 hover:-translate-y-2 transition">
      <Link className="flex flex-col items-center space-y-3" to={`/movie/${movie.id}`}>
        <img
          className="rounded w-full h-[250px] object-cover transition hover:scale-105"
          alt={movie.title}
          src={
            movie.poster_path ? `${imageUrl}w500${movie.poster_path}` : '/poster-placeholder.webp'
          }
        />
        <Tooltip message={movie.title}>
          <h5 className="dark:text-gray-200 text-ellipsis w-56 whitespace-nowrap overflow-hidden text-center text-sm md:text-base lg:text-lg">
            {movie.title}
          </h5>
        </Tooltip>
        <Rating count={movie.vote_average} />
      </Link>
    </div>
  )
}

export default Movie
