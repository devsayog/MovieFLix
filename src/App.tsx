import ScrollToTop from '@components/ScrollToTop'
import ThemeContextProvider from '@context/ThemeContext'
import Layout from '@layout/Layout'

function App() {
  return (
    <ThemeContextProvider>
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    </ThemeContextProvider>
  )
}

export default App
