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
    <div className="my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14 grid justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
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
