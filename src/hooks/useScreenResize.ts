import { useEffect, useState } from 'react'

const isMdScreen = () => window.innerWidth >= 768

export default function useScreenResize() {
  const [isMd, setIsMd] = useState(isMdScreen)
  useEffect(() => {
    const onResize = () => setIsMd(isMdScreen)

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return { isMd }
}
