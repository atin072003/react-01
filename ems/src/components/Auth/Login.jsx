import React, { useState } from 'react'
import {Lock} from 'lucide-react'

const Login = ({handleLogin}) => {

     const[email,setEmail] = useState('');
     const[password,setPassword] = useState('');

    const submitHandler = (e) =>{
         e.preventDefault();
         handleLogin(email,password)
         setEmail("")
         setPassword("")
          
          
           
    }
  return (
    <div className='bg-violet-600 min-h-screen w-screen flex items-center justify-center'>
        <div className='border-2 border-violet-400 rounded-xl p-20'>

            <form className='flex flex-col items-center justify-center'>
                
                <input  value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} required className='text-white outline-none border-2 border-violet-400 rounded-xl px-5 py-2 placeholder:text-white text-xl' type="email" placeholder='Enter your email' />


                <input value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}  required className='text-white outline-none  border-2 border-violet-400 rounded-xl px-5 py-2 mt-4  placeholder:text-white text-xl' type="password" placeholder='Enter your password' />


                <button onClick={(e) => {
                    submitHandler(e);
                }} className='text-black w-full outline-none bg-white  rounded-full  py-1 px-20  mt-7 active:scale-95 active:bg-green-400  text-xl font-semibold cursor-pointer'>Log in</button>

            </form>
        </div>
      
    </div>
  )
}

export default Login
