import { Dispatch, SetStateAction, useCallback } from 'react'

type PaginationTypes<S> = {
  currentPage: number
  setPage: Dispatch<SetStateAction<S>>
  totalPages: number
  totalResults: number
  scrollToTop?: number
}

function Pagination({
  currentPage,
  setPage,
  totalPages,
  totalResults,
  scrollToTop,
}: PaginationTypes<number>) {
  const scroll = useCallback(() => window.scroll({ top: scrollToTop, left: 0 }), [])

  const handlePrev = () => {
    setPage((prev) => prev - 1)
    scroll()
  }
  const handleNext = () => {
    setPage((prev) => prev + 1)
    scroll()
  }
  if (totalPages === 0) return null
  return (
    <div className="border-t border-t-gray-600">
      <div className="flex items-center justify-between py-2">
        <p className="paragraph hidden sm:block">
          Showing{' '}
          <span className="italic"> {currentPage === 1 ? 1 : (currentPage - 1) * 20 + 1} </span>
          to <span className="italic">
            {currentPage === 1 ? 20 : (currentPage - 1) * 20 + 20}
          </span>{' '}
          of <span className="italic"> {totalResults}</span> results
        </p>
        <div className="ml-auto sm:ml-0 flex space-x-1">
          <button
            onClick={handlePrev}
            type="button"
            className="pagination-btn"
            disabled={currentPage === 1}
          >
            &larr; Prev
          </button>
          <button
            onClick={handleNext}
            type="button"
            className="pagination-btn"
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

Pagination.defaultProps = {
  scrollToTop: 430,
}

export default Pagination
