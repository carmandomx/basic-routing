import { useContext } from 'react'
import ejemploContext from '../ejemploContext'

const FAQ = () => {
  const value = useContext(ejemploContext)
  console.log(value)
  return <div>Este es mi FAQ Component</div>
}

export default FAQ
