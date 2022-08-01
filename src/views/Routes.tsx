import { Routes, Route } from 'react-router-dom'
import ActorDescription from './ActorDescription'
import MovieDescription from './MovieDescription'
import Movies from './Movies'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:genreOrCat" element={<Movies />} />
        <Route path="movie/:id" element={<MovieDescription />} />
        <Route path="actors/:id" element={<ActorDescription />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
