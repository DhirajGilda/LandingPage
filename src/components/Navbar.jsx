import React from 'react'
import { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from 'react-scroll';



function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div>
      <nav className=' bg-[#f7ffc6] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
        <div className=' mx-auto px-8 sm:px-6 lg:pr-14 lg:pl-8'>
          <div className='flex items-center justify-end h-16'>
            <div className=' flex items-center justify-between w-full'>
              <div className='flex-shrink-0'>
              <img 
                  className="h-12 w-14 animate-pulse "
                  src="/navbar-logo.png"
                  alt="Workflow"
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                {/* <Link className='hover:bg-[#292d0d] hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium'
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>Home</Link>
                <Link  className='hover:bg-[#292d0d] hover:text-white  text-black px-3 py-2 rounded-md text-lg font-medium '
                    to="contactus"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>ContactUs</Link> */}
                  <a href='/' className='hover:bg-[#292d0d] hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium'> Home</a>
                  <a  href='#contactus' className='hover:bg-[#292d0d] hover:text-white  text-black px-3 py-2 rounded-md text-lg font-medium scroll-smooth'> ContactUs</a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-[#292d0d] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#292d0d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                    
                </button>
              </div>
              
          </div>
        </div>
        <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="md:hidden" id="mobile-menu ">
                      <div  className=" flex flex-col items-center justify-center px-8 pt-2 pb-3 space-y-1 ">
                        <a href='/' className='hover:bg-[#292d0d] hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium'>Home</a>
                        <a href='#contactus' className='hover:bg-[#292d0d] hover:text-white  text-black px-3 py-2 rounded-md text-lg font-medium'>ContactUs</a>
                      </div>
                    </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
