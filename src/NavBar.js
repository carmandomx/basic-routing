import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ejemploContext from './ejemploContext'
const NavBar = () => {
  const value = useContext(ejemploContext)

  console.log(value)

  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          width: 400,
          justifyContent: 'space-around'
        }}
      >
        <li>
          <Link to='/home' children='Home' />
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/faq'>F.A.Q</Link>
        </li>
        <li>
          <Link to='/store'>Store</Link>
        </li>
        <li>
          <Link to='/app'>App</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
