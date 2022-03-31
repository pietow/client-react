import React from 'react'
import {Link} from 'react-router-dom'
import linksHeader from '../../data/linksHeader.json'

export default function LgNavList() {

  return (
    <ul className="flex">
        {linksHeader.map((elem) => <li key={elem.name} className="px-4 pb-2 pt-1 hover:scale-110"><Link className="" to={elem.path}>{elem.name}</Link></li>)}
    </ul>

  )
}
