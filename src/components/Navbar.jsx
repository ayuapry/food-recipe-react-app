import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'

export const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] mx-auto flex justify-between items-center p-1 bg-orange-500 z-10'>
      {/* Left side */}
      <div className='flex items-center'>
        <Link to="/" className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </Link>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* card button */}
      <button className='bg-black text-white hidden md:flex items-center py-1 rounded-full m-3'>
        <BsFillCartFill size={20} className='mr-2' />Cart
      </button>
</div>
  )
}
