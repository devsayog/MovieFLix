import { lazy, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Spinner from '@components/common/Spinner'

const Movies = lazy(() => import('./Movies'))
const ActorDescription = lazy(() => import('./ActorDescription'))
const MovieDescription = lazy(() => import('./MovieDescription'))
const NotFound = lazy(() => import('@components/NotFound'))

function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:genreOrCat" element={<Movies />} />
          <Route path="movie/:id" element={<MovieDescription />} />
          <Route path="actors/:id" element={<ActorDescription />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
