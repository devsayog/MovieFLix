import generateUniqueId from '@utils/generateUniqueId'
import type { MoviesType } from '../../types/tmdbTypes'
import Movie from './Movie'

interface MovieListProps {
  movies: MoviesType
  exclude?: number
  numberOfMovies?: number
}
function MovieList({ movies, exclude, numberOfMovies }: MovieListProps) {
  const numMovies = numberOfMovies === 0 ? undefined : numberOfMovies
  return (
    <div className="mt-3 flex gap-4 justify-center flex-wrap overflow-hidden">
      {movies.results.slice(exclude, numMovies).map((movie) => (
        <Movie key={generateUniqueId()} movie={movie} />
      ))}
    </div>
  )
}

MovieList.defaultProps = {
  numberOfMovies: 0,
  exclude: 0,
}

export default MovieList
