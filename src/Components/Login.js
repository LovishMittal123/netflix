import React, { useState,useRef } from 'react'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header'
import { validation } from '../utils/Validation';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const dispatch=useDispatch();
  const [isSign,setIsSign]=useState(true);
  const [errMessage,setErrMessage]=useState(null)
  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)
  const toggleSignIn=()=>{
    setIsSign(!isSign);
  }
  const handleButtonClick=()=>{
   const message= validation(email.current.value,password.current.value)
  setErrMessage(message); 
  if(message)return;
  if(!isSign){
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL}= auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    }).catch((error) => {
      // An error occurred
      // ...
      setErrMessage(error.message)
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+"-"+errorMessage)
    // ..
  });
  }else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  }
  return (
    <div className='relative'>
      <Header/>
      <div className='absoulte inset-0'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='logo'/>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absoulte p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className='font-bold text-3xl py-4'>{isSign?"Sign In":"Sign Up"}</h1> 
      {isSign?<div></div>:<input type='text' placeholder='Full Name' className="p-2 my-4 w-full bg-gray-700"/>}
        <input ref={email} type='text' placeholder='Email' className="p-2 my-4 w-full bg-gray-700"/>
        <input ref={password} type='password' placeholder='Password' className="p-2 my-4 w-full bg-gray-700"/>
        <p className='text-red-500 font-bold'>{errMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSign?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSign?"New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
      </form>
      </div>
      </div>
  )
}

export default Login
