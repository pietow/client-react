import React from 'react'
import Logo from '../Logo/Logo'
import NavList from './navList.js'

export default function HeaderLarge() {
  return (
    <header className="fixed top-0 w-screen h-32 bg-teal-normal z-10 px-10 text-best-white flex flex-row justify-between items-center">
      <a href="/">
        <div className="scale-[1.8] p-1 rounded-full border border-1">
          <Logo />
        </div>
      </a>
        <h1 className='text-8xl mt-8'>Welcome, roam mate!</h1>
        <NavList />
    </header>
  )
}
