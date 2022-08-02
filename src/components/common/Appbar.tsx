import { useThemeContext } from '@context/ThemeContext'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBrightnessHighFill, BsBrightnessHigh } from 'react-icons/bs'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useHotkeys } from 'react-hotkeys-hook'
import SearchBox from './SearchBox'

interface AppbarProps {
  open: () => void
}
function Appbar({ open }: AppbarProps) {
  const { mode, toggleMode } = useThemeContext()
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  useHotkeys('ctrl + k', (e) => {
    e.preventDefault()
    setSearchModalOpen(true)
  })

  return (
    <>
      <div className="fixed z-10 inset-x-0 md:left-60 p-2 h-20 flex items-center justify-between bg-purple-700 text-lg text-gray-200 dark:bg-gray-800">
        <button
          type="button"
          onClick={open}
          className="md:hidden inline-flex items-center text-4xl px-2 py-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 hover:text-gray-50 hover:scale-105 transition"
        >
          <p className="sr-only">Open Sidebar</p>
          <HiMenuAlt1 />
        </button>
        <div aria-hidden />
        <div className="flex items-center">
          <div className="bg-slate-200 rounded-md dark:bg-gray-600 relative pointer-events-auto">
            <button
              className="flex text-gray-800 dark:text-gray-200 items-center text-sm leading-6 rounded-md ring-1 ring-gray-400 shadow-sm py-1.5 pl-2 pr-3 hover:opacity-70 transition"
              type="button"
              onClick={() => setSearchModalOpen(true)}
            >
              <AiOutlineSearch className="text-lg md:text-xl lg:text-2xl mr-1" />
              Search...
              <span className="ml-auto pl-3 flex-none text-xs sm:text-sm md:text-base">Ctrl K</span>
            </button>
          </div>
          <button
            type="button"
            className="text-2xl md:text-3xl px-2 py-3 rounded focus:outline-none dark:ring-purple-600 focus-visible:ring-2"
            onClick={toggleMode}
          >
            {mode === 'dark' ? <BsBrightnessHighFill /> : <BsBrightnessHigh />}
            <p className="sr-only">Toggle theme</p>
          </button>
        </div>
      </div>
      <Transition.Root show={searchModalOpen} as={Fragment}>
        <Dialog as="div" onClose={() => setSearchModalOpen(false)} className="relative z-50">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-center items-start mt-24 p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded bg-slate-200 dark:bg-slate-700 text-left align-middle text-gray-800 dark:text-gray-200 shadow-xl transition-all">
                  <div className="">
                    <SearchBox modalClose={() => setSearchModalOpen(false)} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Appbar
