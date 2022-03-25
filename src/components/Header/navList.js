import React from 'react'

export default function NavList() {
    
  const links = [['/', 'home'],['/register', 'register'],['/dashboard', 'dashboard'],['/contact', 'contact'],['/logOut', 'logOut']]
    
  return (
    <ul className="font-noto flex flex-col z-10 bg-gradient-to-r from-lemon-meringue opacity-95 text-gray-dark p-2 space-y-3 text-2xl rounded-md">
      {links.map((elem, i) => <li key={i} className="hover:bg-light-orange active:outline active:outline-aero-blue px-2 rounded"><a href={elem[0]}>{elem[1]}</a></li>)}
    </ul>
  )
}