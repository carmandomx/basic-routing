import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ejemploContext from './ejemploContext'
import { ProvideAuth } from './provider/AuthProvider'
ReactDOM.render(
  <React.StrictMode>
    <ejemploContext.Provider value={{ theme: 'light', locale: 'es-MX' }}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </ejemploContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
