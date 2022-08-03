import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from '@components/common/Spinner'

const Movies = lazy(() => import('./Movies'))
const ActorDescription = lazy(() => import('./ActorDescription'))
const MovieDescription = lazy(() => import('./MovieDescription'))

function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/">
          <Route index element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:genreOrCat" element={<Movies />} />
          <Route path="movie/:id" element={<MovieDescription />} />
          <Route path="actors/:id" element={<ActorDescription />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
