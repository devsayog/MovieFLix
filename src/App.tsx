import ThemeContextProvider from '@context/ThemeContext'
import Layout from '@layout/Layout'

function App() {
  return (
    <ThemeContextProvider>
      <Layout />
    </ThemeContextProvider>
  )
}

export default App
