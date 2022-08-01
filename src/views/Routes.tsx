import { Routes, Route } from 'react-router-dom'
import MovieDescription from './MovieDescription'
import Movies from './Movies'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:genreOrCat" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDescription />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
