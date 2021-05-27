import { useAuth } from '../provider/AuthProvider'

const Application = () => {
  const { signOut } = useAuth()

  return (
    <div>
      Este es mi Application Component{' '}
      <div>
        <button
          onClick={() => {
            signOut(() => {})
          }}
        >
          Log Out
        </button>
      </div>{' '}
    </div>
  )
}

export default Application
