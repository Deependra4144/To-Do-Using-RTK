import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './Store/Store.js'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Toaster/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
