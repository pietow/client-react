import React from 'react'

export default function NavList() {
    
  const links = [['/', 'home'], ['/register', 'register'], ['/login', 'login'], ['/contact', 'contact']]
    
  return (
    <nav>
        <ul className="flex flex-row justify-between text-3xl font-noto">
            {links.map((elem, i) => <li key={i} className=""><a className="" href={elem[0]}>{elem[1]}</a></li>)}
        </ul>
    </nav>
  )
}