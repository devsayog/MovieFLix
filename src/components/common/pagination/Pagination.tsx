import type { Dispatch, SetStateAction } from 'react'

type PaginationTypes<S> = {
  currentPage: number
  setPage: Dispatch<SetStateAction<S>>
  totalPages: number
  totalResults: number
}

function Pagination({ currentPage, setPage, totalPages, totalResults }: PaginationTypes<number>) {
  const handlePrev = () => setPage((prev) => prev - 1)
  const handleNext = () => setPage((prev) => prev + 1)
  if (totalPages === 0) return null
  return (
    <div className="border-t border-t-gray-600">
      <div className="flex items-center justify-between py-2">
        <p className="paragraph">
          Showing{' '}
          <span className="italic"> {currentPage === 1 ? 1 : (currentPage - 1) * 20 + 1} </span>
          to <span className="italic">
            {currentPage === 1 ? 20 : (currentPage - 1) * 20 + 20}
          </span>{' '}
          of <span className="italic"> {totalResults}</span> results
        </p>
        <div className="flex space-x-1">
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

export default Pagination
