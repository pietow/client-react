import React from 'react'

export default function NavList() {
    
  const links = [
    ['/', 'home'], 
    ['/dashboard', 'dashboard'], 
    ['/register', 'register'], 
    ['/login', 'login'], 
    ['/contact', 'contact'], 
    ['/logOut', 'logOut']
  ]
    
  return (
    <ul className="font-noto flex flex-col z-10 bg-gradient-to-r from-lemon-meringue text-gray p-2 space-y-3 text-2xl rounded-md w-full">
      {links.map((elem, i) => <li key={i} className="hover:bg-light-orange hover:text-gray-dark active:outline active:outline-aero-blue pl-2 rounded"><a className="w-full block" href={elem[0]}>{elem[1]}</a></li>)}
    </ul>
  )
}