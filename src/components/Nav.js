import React, {useState} from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import user from "../images/image-avatar.png";
import Cart from './Cart'
import menu from '../images/icon-menu.svg'
import {Menu} from '@headlessui/react';
const Nav = ({clicked}) => {

  const [open, setOpen] = useState(false);
  

  return (
    <div className='relative'>
      <nav className="mt-4 mb-7 flex  justify-between items-center">
      <div class="md:hidden flex items-center">
      <img src={menu} onClick={() => setOpen(!open)} alt="menu" />
      </div>

      {
        open && (
        <div className='md:hidden absolute top-10 left-0 bg-slate-100 text-2xl rounded-lg p-5 z-10'>
          <ul className="flex flex-col items-center space-x-1 cursor-pointer">
            <li className='hover:text-orange-400 font-medium'>Collections</li>
            <li className='hover:text-orange-400 font-medium'>Men</li>
            <li className='hover:text-orange-400 font-medium'>Women</li>
            <li className='hover:text-orange-400 font-medium'>About</li>
            <li className='hover:text-orange-400 font-medium'>Contact</li>
          </ul>
          </div>
        
        )
      }


        <div className="flex gap-5">
          <div className='cursor-pointer'>
            <img src={logo} />
          </div>
          <ul className="hidden md:flex items-center space-x-5">
            <li className='hover:text-orange-400 font-medium hover:border-b-4 border-b-orange-500 cursor-pointer' >Collections</li>
            <li className='hover:text-orange-400 font-medium hover:border-b-4 border-b-orange-500 cursor-pointer' >Men</li>
            <li className='hover:text-orange-400 font-medium hover:border-b-4 border-b-orange-500 cursor-pointer' >Women</li>
            <li className='hover:text-orange-400 font-medium hover:border-b-4 border-b-orange-500 cursor-pointer' >About</li>
            <li className='hover:text-orange-400 font-medium hover:border-b-4 border-b-orange-500 cursor-pointer' >Contact</li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
        <div onClick={clicked}>
        <img className="w-6 h-6 hidden md:block" src={cart} alt="icon-cart" />
        </div>
          
          <div onClick={clicked} >
          <img className="w-8 h-8" src={user} alt="avater" />
          </div>
          
          
          
          
        </div>
      </nav>
      <div className="w-full h-1 bg-gray-200"></div>
    </div>
  );
};

export default Nav;
