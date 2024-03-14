import React, { useEffect } from 'react'
import Register from './Register'
import {createBrowserRouter , RouterProvider, useNavigate} from "react-router-dom"
import Dashboard from './Dashboard'

const Body = () => {


  const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Register/>
    },
    {
      path : "/dashboard",
      element : <Dashboard />
    }
  ])

 
  return (
    <RouterProvider router={appRoute} />
  )
}

export default Body