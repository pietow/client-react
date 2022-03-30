import React from 'react'

export default function LgNavList() {

  const links = [
    ['/', 'home'], 
    ['/dashboard', 'dashboard'], 
    ['/contact', 'contact'], 
    ['/logOut', 'logOut']
  ]


  return (
    <ul className="flex">
        {links.map((elem, i) => <li key={i} className="px-4 pb-2 pt-1 hover:scale-110"><a className="" href={elem[0]}>{elem[1]}</a></li>)}
    </ul>

  )
}
