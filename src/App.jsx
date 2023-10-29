import { useLocation } from 'react-router-dom'
import './App.css'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import { useEffect } from 'react'


function App() {
  const location = useLocation()
  
  useEffect(() => {
    // set page title
    document.title = "Home"
  }, [location])

  return (
    (
      // index page
      <>
        <Home />

        {/* 
          /topic/:id page
        */}
        <Details />
      </>
    )
  )
}

export default App
