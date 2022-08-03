import { Link, NavLink } from 'react-router-dom'
import { ImFilm } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import { useGetGenresQuery } from '@services/tmdbApi'
import categories, { GenresIcons } from './sidebarConstants'
import type { GenresKeys } from './sidebarConstants'

interface SidebarProps {
  close?: () => void
}

function Sidebar({ close }: SidebarProps) {
  const { data } = useGetGenresQuery()
  return (
    <nav className="w-60 relative md:fixed md:inset-0 md:overflow-y-scroll z-50 bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-300">
      <button
        onClick={close && close}
        type="button"
        className="md:hidden relative left-[75%] top-2 p-2 rounded-full border-2 border-purple-700 dark:border-slate-100 dark:bg-slate-900 bg-slate-100 text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ring-offset-slate-100 dark:ring-offset-slate-900   dark:focus-visible:ring-purple-500 focus-visible:ring-slate-900"
      >
        <p className="sr-only">Close sidebar</p>
        <AiOutlineClose />
      </button>
      <div className="py-3 md:py-5 px-4">
        <Link
          to="/"
          onClick={close && close}
          className="flex justify-center items-center text-xl md:text-2xl lg:text-3xl py-2  text-purple-700 hover:text-purple-500 hover:scale-105 dark:text-gray-200  dark:hover:text-gray-100  transition"
        >
          <ImFilm />
          <h1 className="ml-2 font-extralight uppercase tracking-wide">movieflix</h1>
        </Link>
      </div>
      {/* Categories */}
      <div className="p-2 md:p-4">
        <h3 className="md:text-lg text-gray-400 my-3">Categories</h3>
        <ul>
          {categories.map(({ label, value, Icon }) => (
            <li key={value}>
              <NavLink
                onClick={close && close}
                to={`/movies/${value}`}
                className={({ isActive }) =>
                  isActive ? 'nav-link bg-slate-300 dark:bg-gray-700' : 'nav-link'
                }
              >
                <Icon />
                <p>{label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* To do fetch from api and display */}
      <div className="p-2 md:p-4">
        <h3 className="text-lg text-gray-400 my-3">Genres</h3>
        <ul>
          {data?.genres?.map(({ name, id }) => {
            const Icon = GenresIcons[name as GenresKeys]

            return (
              <li key={id}>
                <NavLink
                  onClick={close && close}
                  to={`/movies/${id}`}
                  className={({ isActive }) =>
                    isActive ? 'nav-link bg-slate-300 dark:bg-gray-700' : 'nav-link'
                  }
                >
                  <Icon />
                  <p>{name}</p>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
Sidebar.defaultProps = {
  close: () => {},
}
export default Sidebar
