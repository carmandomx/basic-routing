import './App.css'
import { HashRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'
import Routes from './Routes'
import { useContext } from 'react'
import ejemploContext from './ejemploContext'
import { useAuth } from './provider/AuthProvider'
function App () {
  const auth = useAuth()
  console.log(auth)
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </header>
    </div>
  )
}

export default App
