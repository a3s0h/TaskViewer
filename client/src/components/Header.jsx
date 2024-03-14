import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setShowForm } from '../utils/showFormSlice';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.username?.displayName); 

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  const formHandle = () => {
    dispatch(setShowForm());
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user signs up or sign in 
        const {uid , email , displayName} = user;
        dispatch(addUser({uid : uid , email:email , displayName : displayName}));
        navigate("/dashboard");
      } else {
        // if User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[])



  return (
    <div>
      <div className="flex justify-between py-4 items-center text-white z-10 w-full absolute bg-blue-400">
        <div className=" w-[50%] px-10">
          <h1 className="font-bold text-2xl">{`{ View }`}</h1>
        </div>
        {
          user &&
          <div className="flex justify-center items-center gap-5 p-2 mr-9">
          <h3 className="font-bold text-xl ">{user}</h3>
          <button
            onClick={formHandle}
            className="text-white font-bold bg-gray-800 p-3"
          >
            AddTask
          </button>
          <button
            onClick={handleSignOut}
            className="text-white font-bold bg-gray-800 p-3"
          >
            Sign Out
          </button>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Header;
