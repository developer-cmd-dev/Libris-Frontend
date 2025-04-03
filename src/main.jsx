import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './Pages/HomePage'
import { ThemeProvider } from './components/ThemProvider'


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
  }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      </ThemeProvider>
    </RouterProvider>
  </StrictMode>,
)
