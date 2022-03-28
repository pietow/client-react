import React, {useState} from 'react'

export default function NavList() {
    
  

  const links = [['/register', 'register'], ['/login', 'login'], ['/contact', 'contact']]
    
  return (
    <nav className='border w-72 mt-2 bg-teal-normal py-3 px-5 rounded-full shadow-gray-dark'>
        <ul className="flex flex-row justify-between text-2xl font-noto">
            {links.map((elem, i) => <li key={i} className="hover:scale-110"><a className="" href={elem[0]}>{elem[1]}</a></li>)}
        </ul>
    </nav>
  )
}