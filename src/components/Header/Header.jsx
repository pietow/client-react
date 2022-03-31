import React, {useEffect, useRef} from 'react'
import SmNavList from './smNavList.js'
import LgNavList from './lgNavList.js'
import Burger from './burger.js'
import LogoLinkHeader from '../LogoLinkHeader'
import {Link} from 'react-router-dom'

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
        <LogoLinkHeader />
        <h2 className="hidden lg:block text-best-white underline underline-offset-8 decoration-1">Roam Mate</h2>
        <Link title="go to profile" to="/profile" className='lg:order-none order-1 border border-best-white rounded-full w-12 h-12'><span className="relative top-2 left-1 text-best-white">°O.ô°</span><b/> profile pic</Link>
        <div className="lg:order-none order-last lg:hidden" ref={ref}>
          <div onClick={e => toggleBurger(e)} className={toggle ? "transition duration-300 ease-in-out rotate-180 hover:bg-teal-bright active:bg-light-orange" : "ease-in-out transition duration-300 hover:bg-teal-bright active:bg-light-orange"}>     
            <Burger/>
          </div>
          <nav className={toggle ? "absolute drop-shadow-lg top-full left-0 w-full" : "hidden"}>
            <SmNavList />
          </nav>
        </div>
        <nav className='hidden lg:block text-best-white font-noto top-11 absolute bg-teal-normal border-b border-x rounded-full'>
          <LgNavList />
        </nav>
      </header> 
  )
}
