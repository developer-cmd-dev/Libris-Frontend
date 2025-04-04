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
import HomePage from './Pages/HomePage'
import { Toaster } from 'sonner'


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/title/:title',
        element:<BooksDetailPage/>
      },
    ]

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
   
  }


])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Toaster  theme="light" position='top'  />
    <RouterProvider router={router}/>
  </Provider>

)
