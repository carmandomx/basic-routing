import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

const Store = () => {
  const { path, url } = useRouteMatch()
  const { productId } = useParams()
  console.log('Este es mi ProductID:', productId)
  //   console.log('Esto es un PATH:', path, 'Esto es un URL:', url)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/details`}>Detalles</Link>
          </li>
          <li>
            <Link to={`${url}/more`}>Mas productos</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}/details`}>Aqui van a ir mis detalles</Route>
        <Route path={`${path}/more`}>Aqui voya mostrar mas productos</Route>
        <Route path={path}>
          Aqui va mi componente Store con ProductID: {productId}
        </Route>
      </Switch>
    </div>
  )
}

export default Store
