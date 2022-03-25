import React from 'react'
import Logo from '../Logo/Logo'
import NavList from './navList.js'

export default function HeaderLarge() {
  return (
    <header className="relative flex flex-row justify-evenly">
      <Logo />
      <div>
        <h1>here large header</h1>
        <NavList />
        </div>
    </header>
  )
}
