import React, {/* useState, */ useEffect, useRef} from 'react'
import NavList from './navList.js'
import LgNavList from './lgNavList.js'
import Burger from './burger.js'
import Logo from '../Logo/Logo'

export default function Header({toggle, setToggle, toggleBurger}) {

  const ref = useRef()

  useEffect(() => {
    const checkOutsideClick = e => {
      if (toggle && ref.current && !ref.current.contains(e.target)) setToggle(0)
    }
    document.addEventListener("mousedown", checkOutsideClick)
    return () => document.removeEventListener("mousedown", checkOutsideClick)
  }, [toggle, setToggle])

  return (
      <header className="flex flex-row items-center justify-evenly h-14 sticky top-0 z-10 bg-teal-normal">
        <h2 className="hidden xl:block text-best-white font-zeyada text-4xl absolute left-6">Roam Mate</h2>
        <a href="/" className='border border-best-white rounded-full'><Logo /></a>
        <h1 className="text-best-white font-zeyada text-4xl">Welcome, &lt;user prop&gt;!</h1>
        <a href="/" className='border border-best-white rounded-full w-12 h-12'><span className="relative top-2 left-1 text-best-white">°O.ô°</span><b/> profile pic</a>
        <div className="lg:hidden" ref={ref}>
          <div onClick={e => toggleBurger(e)} className={toggle ? "transition duration-300 ease-in-out rotate-180 hover:bg-teal-bright active:bg-light-orange" : "ease-in-out transition duration-300 hover:bg-teal-bright active:bg-light-orange"}>     
            <Burger/>
          </div>
          <nav className={toggle ? "absolute drop-shadow-lg top-full left-0 w-full" : "hidden"}>
            <NavList />
          </nav>
        </div>
        <nav className='hidden lg:block text-best-white font-noto top-10 absolute bg-teal-normal border rounded-full'>
          <LgNavList />
        </nav>
      </header> 
  )
}
