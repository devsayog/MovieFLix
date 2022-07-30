import { Routes, Route } from 'react-router-dom'
import Movies from './Movies'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<h1>Movie Desc page</h1>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
