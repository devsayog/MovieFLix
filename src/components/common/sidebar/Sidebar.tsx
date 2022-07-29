import { Link } from 'react-router-dom'
import { ImFilm } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import categories from './sidebarConstants'

interface SidebarProps {
  close?: () => void
}

function Sidebar({ close }: SidebarProps) {
  return (
    <nav className="w-60 relative bg-slate-100 dark:bg-slate-900 min-h-screen text-gray-800 dark:text-gray-300">
      <button
        onClick={close && close}
        type="button"
        className="md:hidden relative left-[75%] top-2 p-2 rounded-full border-2 border-purple-700 dark:border-slate-100 dark:bg-slate-900 bg-slate-100 text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ring-offset-slate-100 dark:ring-offset-slate-900   dark:focus-visible:ring-purple-500 focus-visible:ring-slate-900"
      >
        <AiOutlineClose />
      </button>
      <div className="py-5 px-4">
        <Link
          to="/"
          className="flex justify-center items-center text-3xl py-2  text-purple-700 hover:text-purple-500 hover:scale-105 dark:text-gray-200  dark:hover:text-gray-100  transition"
        >
          <ImFilm />
          <h1 className="ml-2 font-extralight uppercase tracking-wide">movieflix</h1>
        </Link>
      </div>
      {/* Categories */}
      <div className="px-4">
        <h3 className="text-lg text-gray-400 my-3">Categories</h3>
        <ul>
          {categories.map(({ label, value, Icon }) => (
            <li key={value}>
              <Link
                to={`/${value}`}
                className="py-3 flex items-center text-xl space-x-2 dark:hover:text-gray-100 hover:text-gray-500 transition border-b border-gray-600"
              >
                <Icon />
                <p>{label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* To do fetch from api and display */}
    </nav>
  )
}
Sidebar.defaultProps = {
  close: () => {},
}
export default Sidebar
