import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setShowForm } from '../utils/showFormSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  const formHandle = () => {
    dispatch(setShowForm(true));
  };

  return (
    <div>
      <div className="flex justify-between py-4 items-center text-white z-10 w-full absolute bg-blue-400">
        <div className=" w-[50%] px-10">
          <h1 className="font-bold text-2xl">{`{ View }`}</h1>
        </div>
        <div className="flex justify-center items-center gap-5 p-2 mr-9">
          <button
            onClick={formHandle}
            className="text-white font-bold bg-gray-800 p-3"
          >
            AddTask
          </button>
          <button
            onClick={handleSignOut}
            className="text-white font-bold"
          >
            (Sign Out)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
