import React from 'react'
import Twitter from "../img/twitter.svg"
const Login = () => {
  return (
    <div className='container mt-44'>
    <div className='w-2/4 mx-auto'>
    <img className='mb-10' src={Twitter} alt="" />
      <h2 className='text-5xl text-black font-bold'>Log in to Twitter</h2>
      <input className='w-2/3 border-solid border-2 border-indigo-600 pt-1 pb-1' type="text"  placeholder='Phone number, email address'/>
      <input className='w-2/3 border-solid border-2 border-indigo-600 pt-1 pb-1 mt-5' type="text"  placeholder='Password'/>
        
          </div>

          
    </div>
  )
  
}

export default Login

