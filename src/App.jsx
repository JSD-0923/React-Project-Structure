import './App.css'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'


function App() {

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
