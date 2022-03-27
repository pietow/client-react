import React from 'react'
import Logo from '../Logo/Logo'
import NavList from './navList.js'

export default function HeaderLarge() {
  return (
    <header className="fixed top-0 border-b w-screen h-32 bg-teal-normal z-10 px-10 text-best-white flex flex-row justify-center items-center">
      <a href="/">
        <div className="scale-[1.8] p-1 top-8 absolute left-8 rounded-full border border-1">
          <Logo />
        </div>
      </a>
      <div className='flex flex-col items-center'>
        <h1 className='text-7xl mt-8'>Welcome, roam mate!</h1>
        
        <NavList />
      </div>
    </header>
  )
}
