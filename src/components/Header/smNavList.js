import React from 'react'
import linksHeader from '../../data/linksHeader.json'

export default function SmNavList() {
    
  return (
    <ul className="font-noto flex flex-col z-10 bg-gradient-to-r from-lemon-meringue text-gray p-2 space-y-3 text-2xl rounded-md w-full">
      {linksHeader.map(elem => <li key={elem.name} className="hover:bg-light-orange hover:text-gray-dark active:outline active:outline-aero-blue pl-2 rounded"><a className="w-full block" href={elem.path}>{elem.name}</a></li>)}
    </ul>
  )
}