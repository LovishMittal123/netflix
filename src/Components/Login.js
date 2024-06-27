import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSign,setIsSign]=useState(true);
  const toggleSignIn=()=>{
    setIsSign(!isSign);
  }
  return (
    <div className='relative'>
      <Header/>
      <div className='absoulte inset-0'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='logo'/>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
      <form className="w-3/12 absoulte p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className='font-bold text-3xl py-4'>{isSign?"Sign In":"Sign Up"}</h1> 
      {isSign?<div></div>:<input type='text' placeholder='Full Name' className="p-2 my-4 w-full bg-gray-700"/>}
        <input type='email' placeholder='Email' className="p-2 my-4 w-full bg-gray-700"/>
        <input type='password' placeholder='Password' className="p-2 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSign?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSign?"New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
      </form>
      </div>
      </div>
  )
}

export default Login
