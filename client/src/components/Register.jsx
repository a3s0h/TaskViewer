import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidateData } from '../utils/validateFormData';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Register = () => {

    const dispatch = useDispatch();


    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const ToggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const handleValidation = async () => {
        const msg = ValidateData(email.current.value, password.current.value);
        setErrorMessage(msg);
        
        if (msg) return;
        
        try {
            if (!isSignIn) {
                // Sign up logic
                const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                
                // Once signed in, update user profile
                await updateProfile(user, {
                    displayName: name.current.value,
                });
                // dispatch(addUser(name.current.value));
                
                // Profile updated!
                addUserToServer(name.current.value);
                console.log(user);
                navigate("/dashboard");
            } else {
                // Sign in logic
                const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                
                // dispatch(addUser(name.current.value));
                console.log("hello")
                // Signed in
                console.log(user);
                navigate("/dashboard");
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
        }
    };
    
    const addUserToServer = (username) => {
        axios.post('http://localhost:3000/api/v1/tasks/addUser', {
            username: username,
        })
        .then(response => {
            console.log('User added to server:', response.data);
        })
        .catch(error => {
            console.error('Error adding user to server:', error);
        });
    }

    return (
        <div className="">
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 text-white  bg-black my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-md">
                {
                    isSignIn ?
                        <h1 className="text-3xl font-semibold py-5 px-2">Sign In</h1> :
                        <h1 className="text-3xl font-semibold py-5 px-2">Sign Up</h1>
                }

                {
                    !isSignIn &&
                    <input
                        ref={name}
                        type='text'
                        placeholder='Enter name'
                        className="p-2 py-4 m-2 rounded-md bg-gray-700 w-full"
                    />
                }

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address or Phone number"
                    className="p-2 py-4 m-2 rounded-md bg-gray-700 w-full"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className="p-2 py-4 m-2 rounded-md bg-gray-700 w-full"
                />
                <p className="text-red-600 font-bold text-xl p-2 m-2">{errorMessage}</p>
                <button className="p-2 py-4 m-2 mt-9 bg-red-600 rounded-lg w-full" onClick={handleValidation}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                {
                    isSignIn ?
                        <p className="p-2 m-2">New to Netflix? <span className="cursor-pointer" onClick={ToggleSignIn}>Sign Up</span></p> :
                        <p className="p-2 m-2">Already a user? <span className="cursor-pointer" onClick={ToggleSignIn}>Sign In</span></p>
                }

            </form>



        </div>
    )
}

export default Register