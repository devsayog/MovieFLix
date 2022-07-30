import generateUniqueId from '@utils/generateUniqueId'
import type { MoviesType } from '../../types/tmdbTypes'
import Movie from './Movie'

interface MovieListProps {
  movies: MoviesType
  exclude: number
}
function MovieList({ movies, exclude }: MovieListProps) {
  return (
    <div className="mt-3 flex gap-4 justify-center flex-wrap overflow-hidden">
      {movies.results.slice(exclude).map((movie) => (
        <Movie key={generateUniqueId()} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
