import { Redirect, Route } from 'react-router'
import { useAuth } from '../provider/AuthProvider'

const ProtectedRoute = ({ children, ...props }) => {
  const auth = useAuth()
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.entrenadorPokemon ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
