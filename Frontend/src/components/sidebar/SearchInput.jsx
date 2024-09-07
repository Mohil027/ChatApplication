import React from 'react'
import {IoSearchSharp} from 'react-icons/io5';

const SearchInput = () => {
  return (
    <div className='flex items-center w-full'>
      <form className='flex items-center gap-2 w-4/5'>
        <input type='text' placeholder='Search..' className='input input-bordered rounded-full flex-grow' />
        <button type='submit' className='btn btn-circle bg-orange-600 opacity-75 text-white'>
          <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
      </form>
      <span className='ml-1 mr-1 text-2xl font-serif text-orange-600 opacity-75 w-1/5 text-center'>ByteBanter</span>
    </div>
  )
}

export default SearchInput