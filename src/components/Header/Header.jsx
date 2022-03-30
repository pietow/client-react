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
      <header className="flex flex-row items-center justify-evenly h-14 sticky top-0 z-10 bg-teal-normal border-b border-best-white">
        <h2 className="hidden xl:block text-best-white font-zeyada text-4xl absolute left-6">Welcome, &lt;user prop&gt;!</h2>
        <a href="/" className='border border-best-white rounded-full'><Logo /></a>
        <h1 className="text-best-white font-zeyada text-4xl underline underline-offset-8 decoration-1">Roam Mate</h1>
        <a href="/dashboard" className='border border-best-white rounded-full w-12 h-12'><span className="relative top-2 left-1 text-best-white">°O.ô°</span><b/> profile pic</a>
        <div className="lg:hidden" ref={ref}>
          <div onClick={e => toggleBurger(e)} className={toggle ? "transition duration-300 ease-in-out rotate-180 hover:bg-teal-bright active:bg-light-orange" : "ease-in-out transition duration-300 hover:bg-teal-bright active:bg-light-orange"}>     
            <Burger/>
          </div>
          <nav className={toggle ? "absolute drop-shadow-lg top-full left-0 w-full" : "hidden"}>
            <NavList />
          </nav>
        </div>
        <nav className='hidden lg:block text-best-white font-noto top-11 absolute bg-teal-normal border-b border-x rounded-full'>
          <LgNavList />
        </nav>
      </header> 
  )
}
