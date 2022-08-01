import { HiMenuAlt1 } from 'react-icons/hi'

interface AppbarProps {
  open: () => void
}
function Appbar({ open }: AppbarProps) {
  return (
    <div className="fixed z-10 inset-x-0 md:left-60 p-2 h-20 flex items-center justify-between bg-purple-700 text-lg text-gray-200 dark:bg-gray-800">
      <button
        type="button"
        onClick={open}
        className="md:hidden inline-flex items-center text-4xl px-2 py-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 hover:text-gray-50 hover:scale-105 transition"
      >
        <p className="sr-only">Open Sidebar</p>
        <HiMenuAlt1 />
      </button>
      <p>TODO SEARCH BOX AND TOGGLE LIGHT/DARK MODE</p>
    </div>
  )
}

export default Appbar
