import React from "react"
import ReactDOM from "react-dom/client"
import ShopControl from './components/ShopControl.jsx'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from "react-redux"
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ShopControl />
    </Provider>
  </React.StrictMode>
)