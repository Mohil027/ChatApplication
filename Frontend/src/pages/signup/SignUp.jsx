import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import Logo from '../../assets/Artboard-2.png'
import Home2 from '../home/Home2'
import { useState } from 'react'

import { FaUser } from "react-icons/fa";
{/* <img src={Logo} alt='ByteBanter Logo' className='max-w-lg h-auto' /> */}

const SignUp = () => {
  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  return (
    
    <>
    {/* <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>  */}
    
        {/* <Home2 /> */}
        {/* ByteBanter */}
    {/* </div> */}
    {/* <div className='w-px bg-blue-200 h-full'></div> */}
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <h1 className='text-3xl font-semibold font-serif text-center text-blue-400'> ByteBanter
        {/* <span className='text-blue-400 font-serif text-3xl'> ByteBanter </span> */}
        </h1>
        <form>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Full Name </span>
            </label>
            <input
              type='text'
              placeholder='Enter Full Name'
              className='w-full input input-bordered h-10 pr-10'
              // value={inputValue}
              // onChange={handleChange}
            />
            {/* {!inputValue && (
              <FaUser className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
            )} */}

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Username </span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Password </span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Confirm Password </span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>

        <GenderCheckbox />

        <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          {"Already"} have an account?
        </a>
        <div>
          <button className='btn btn-block btn-sm mt-2'> Signup </button>
        </div>
        </form>
        

      </div>
      
    </div>
    </>
  )
}

export default SignUp