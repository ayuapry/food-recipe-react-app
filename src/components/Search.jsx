import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export const Search = ({onChange}) => {
  return (
    <div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[300px]'>
        <AiOutlineSearch size={20} />
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text"  placeholder='Search Menu ...' onChange={onChange} />
      </div>
    </div>
  )
};
