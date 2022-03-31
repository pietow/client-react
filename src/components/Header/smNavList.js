import React from 'react'
import {Link} from 'react-router-dom'
import linksHeader from '../../data/linksHeader.json'

export default function SmNavList() {
    
  return (
    <ul className="font-noto flex flex-col z-10 bg-gradient-to-r from-lemon-meringue text-gray p-2 space-y-3 text-2xl rounded-md w-full">
      {linksHeader.map((elem) => <li key={elem.name} className="hover:bg-light-orange hover:text-gray-dark active:outline active:outline-aero-blue pl-2 rounded"><Link className="w-full block" to={elem.path}>{elem.name}</Link></li>)}
    </ul>
  )
}