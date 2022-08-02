import { Combobox, Transition } from '@headlessui/react'
import { ChangeEvent, useState, Fragment, useMemo } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import debounce from '@utils/debounce'
import { imageUrl } from '@constants/appConstants'
import { useLazySearchMoviesQuery } from '@services/tmdbApi'

type SearchBoxType = {
  modalClose: () => void
}

function SearchBox({ modalClose }: SearchBoxType) {
  const navigate = useNavigate()
  const [select] = useState<any>([])
  const [trigger, { data }] = useLazySearchMoviesQuery()
  const [query, setQuery] = useState('')

  const initSearchApiRequest = useMemo(() => {
    return debounce(async (q: string) => {
      if (!q.trim()) {
        return
      }
      const trimed = q.trim()
      await trigger(trimed)
    }, 500)
  }, [])

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setQuery(v)
    initSearchApiRequest(v)
  }
  const onComboboxChange = (id: number) => {
    navigate(`/movie/${id}`)
    modalClose()
  }

  return (
    <div>
      <Combobox value={select} onChange={onComboboxChange}>
        <div className="relative flex items-center p-3 border-b dark:border-b-gray-500">
          <AiOutlineSearch className="text-2xl" />
          <Combobox.Input
            className="w-full border-none outline-none p-3 text-sm md:text-base leading-5 dark:text-gray-100 bg-transparent focus:ring-0"
            onChange={onChangeQuery}
            placeholder="Search movies ..."
          />
          <span className="bg-slate-400 dark:bg-slate-600 p-2 rounded-md">Esc</span>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="mt-1 max-h-96 w-full overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data && !data?.results.length && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 md:text-lg text-center">
                Nothing found.
              </div>
            ) : (
              data?.results.map((movie) => (
                <Combobox.Option
                  key={movie.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-slate-500 text-gray-300 dark:bg-gray-600 dark:text-white'
                        : 'text-gray-700 dark:text-gray-200'
                    }`
                  }
                  value={movie.id}
                >
                  {() => (
                    <Link to={`/movie/${movie.id}`} onClick={modalClose}>
                      <figure className="flex items-center space-x-3">
                        <img
                          src={
                            movie.backdrop_path === null
                              ? '/poster-placeholder.webp'
                              : `${imageUrl}w500${movie.backdrop_path}`
                          }
                          alt={movie.title}
                          className="h-20 w-32 object-cover"
                        />
                        <figcaption className="paragraph">{movie.title}</figcaption>
                      </figure>
                    </Link>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  )
}

export default SearchBox
