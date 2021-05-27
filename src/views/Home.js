import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../provider/AuthProvider'

const Home = () => {
  const { signIn } = useAuth()
  const history = useHistory()
  return (
    <div>
      Este es mi Home Component{' '}
      <div>
        <button
          onClick={() =>
            signIn(() => {
              history.push('/app')
            })
          }
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default Home
