import React from 'react'
import Logo from '../Logo/Logo'
import NavList from './navList.js'

export default function HeaderLarge() {
  return (
    <header className="px-8 fixed top-0 border-b w-screen h-20 bg-teal-normal z-10 text-best-white flex flex-row justify-center items-center">
      <a href="/" className="left-8 absolute">
        <div className="scale-[1.3] rounded-full border border-1">
          <Logo />
        </div>
      </a>
      <h1 className='mt-4 text-7xl'>Welcome, roam mate!</h1>  
      
      <NavList />
      
    </header>
  )
}
