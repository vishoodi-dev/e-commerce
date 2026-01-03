import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex items-center px-6'>
        <div className='flex-1'>
          <img src={assets.logo} alt="logo" className='w-36' />
        </div>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 flex-none'>
          <NavLink to="/" className='flex flex-col items-center gap-1'>
            <p className='text-lg'>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/collection" className='flex flex-col items-center gap-1'>
            <p className='text-lg'>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/about" className='flex flex-col items-center gap-1'>
            <p className='text-lg'>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/contact" className='flex flex-col items-center gap-1'>
            <p className='text-lg'>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>          
        </ul>
        <div className='flex items-center gap-6 flex-1 justify-end'>
          <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />
          <div className='group relative'>
            <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg shadow-lg'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className='relative'>
            <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
            <p className='absolute -top-1 -right-2 text-[11px] w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center'>0</p>
          </Link>
          <img 
            src={assets.menu_icon} 
            alt="menu" 
            className='w-5 cursor-pointer sm:hidden' 
            onClick={() => setVisible(!visible)}
          />
        </div>
        {/* Sidebar menu for small screens */}
        <div className={`fixed inset-0 bg-white transition-transform duration-300 sm:hidden z-[60] ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='flex flex-col text-gray-700 w-full'>
            <div className='flex items-center gap-4 h-14 px-4 border-b cursor-pointer' onClick={() => setVisible(false)}>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back" />
              <p className='text-lg font-medium'>Back</p>
            </div>
            <NavLink to="/" onClick={() => setVisible(false)} className='py-3 px-6 border-b'>HOME</NavLink>
            <NavLink to="/collection" onClick={() => setVisible(false)} className='py-3 px-6 border-b'>COLLECTIONS</NavLink>
            <NavLink to="/about" onClick={() => setVisible(false)} className='py-3 px-6 border-b'>ABOUT</NavLink>
            <NavLink to="/contact" onClick={() => setVisible(false)} className='py-3 px-6 border-b'>CONTACT</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar
