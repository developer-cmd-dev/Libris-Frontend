import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import BooksDetailPage from './Pages/BooksDetailPage'
import { Provider } from 'react-redux'
import {store} from './App/store'


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },
  {
    path:'/signup',
    element:<SignUpPage/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/title/:title',
    element:<BooksDetailPage/>
  }


])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>

)
