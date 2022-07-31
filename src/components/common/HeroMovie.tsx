import { Link } from 'react-router-dom'
import { imageUrl } from '@constants/appConstants'
import { MovieType } from '../../types/tmdbTypes'

function HeroMovie({ movie }: { movie: MovieType }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl}original/${movie.backdrop_path})`,
      }}
      className="relative mb-5 flex items-end h-[500px] bg-cover rounded w-full"
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative flex flex-col space-y-2 md:space-y-3 p-3 w-11/12 md:w-3/4 lg:w-2/3 z-10 text-gray-200">
        <h4 className="heading-4">{movie.title}</h4>
        <p className="paragraph">{movie.overview}</p>
        <Link to={`/movies/${movie.id}`} className="self-start primary-btn bg-purple-700">
          Read more &rarr;
        </Link>
      </div>
    </div>
  )
}

export default HeroMovie
