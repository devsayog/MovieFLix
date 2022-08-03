import type { ReactNode } from 'react'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollToTopTypes = {
  children: ReactNode
}
function ScrollToTop({ children }: ScrollToTopTypes) {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scroll({ top: 0, left: 0 })
  }, [pathname])
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default ScrollToTop
