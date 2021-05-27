import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './views/About'
import Application from './views/Application'
import FAQ from './views/FAQ'
import Home from './views/Home'
import NoMatch from './views/NoMatch'
import Store from './views/Store'
import ejemploContext from './ejemploContext'
import ProtectedRoute from './components/ProtectedRoute'
const Routes = () => {
  const context = useContext(ejemploContext)
  console.log(context)
  return (
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/faq'>
        <FAQ />
      </Route>
      <Route path='/store/:productId'>
        <Store />
      </Route>
      <ProtectedRoute path='/app'>
        Hola
        <Application />
      </ProtectedRoute>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='*'>
        <NoMatch />
      </Route>
    </Switch>
  )
}

export default Routes
