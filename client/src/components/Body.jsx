import React, { useEffect } from 'react'
import Header from "./Header"
import Register from './Register'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Browse from './Browse'
import { auth } from '../utils/firebase'
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {

  const dispatch = useDispatch();
  

  const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Register/>
    },
    {
      path : "/browse",
      element : <Browse />
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user signs up or sign in 
        const {uid , email , displayName} = user;
        dispatch(addUser({uid : uid , email:email , displayName : displayName}));
      } else {
        // if User is signed out
        dispatch(removeUser());
      }
    });
  },[])

  return (
    <RouterProvider router={appRoute} />
  )
}

export default Body