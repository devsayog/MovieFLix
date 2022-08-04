import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from '@components/ScrollToTop'
import ThemeContextProvider from '@context/ThemeContext'
import Layout from '@layout/Layout'

function App() {
  return (
    <HelmetProvider>
      <ThemeContextProvider>
        <ScrollToTop>
          <Layout />
        </ScrollToTop>
      </ThemeContextProvider>
    </HelmetProvider>
  )
}

export default App
