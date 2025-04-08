import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router'
import axiosHandler from '@/utils/axiosHandler'
import { toast } from 'sonner'
import { login } from '@/Features/AuthenticationSlice'

function ProtectedRoute() {


const {isAuthenticated} = useSelector((state) => state.authentication)
  return isAuthenticated ?(
    <Outlet/>
  ):<Navigate to={"/login"}  />
}

export default ProtectedRoute