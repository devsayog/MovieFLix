import { createContext, ReactNode, useContext, useLayoutEffect, useMemo, useState } from 'react'

export type ThemeContextValue = {
  mode: 'dark' | 'light'
  toggleMode: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

ThemeContext.displayName = 'ThemeContext'

type ThemeContextProviderProps = {
  children: ReactNode
}
type Themetype = 'dark' | 'light'
const getInitialTheme = () => {
  if (typeof window !== undefined && window.localStorage) {
    const storedThemeValue = window.localStorage.getItem('color-theme')
    if (typeof storedThemeValue === 'string') {
      return storedThemeValue as Themetype
    }
    const prefersDarkMode = window.matchMedia('prefers-color-scheme: dark')
    if (prefersDarkMode.matches) {
      return 'dark'
    }
  }
  return 'light'
}

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [mode, setMode] = useState<Themetype>(getInitialTheme)

  const toggleMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  const theme = useMemo(() => ({ mode, toggleMode }), [mode])

  const rawSetTheme = (rawTheme: Themetype) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  useLayoutEffect(() => {
    rawSetTheme(mode)
  }, [mode])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (ctx === undefined) {
    throw new Error('Theme Context must be called inside a ThemeContextProvider')
  }
  return ctx
}

export default ThemeContextProvider
