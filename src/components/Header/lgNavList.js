import React, { useContext } from 'react'
import {  Link } from 'react-router-dom'
import linksHeader from '../../data/linksHeader.json'
// import { Authentication } from '../../context/authContext'
import { SetAuthentication } from '../../context/setAccessTokenContext'

export default function LgNavList() {

  const setAccessToken = useContext( SetAuthentication )

  return (
    <ul className="flex">
        {linksHeader.map((elem) => <li key={elem.name} className="px-4 pb-2 pt-1 hover:scale-110"><Link className="" to={elem.path}>{elem.name}</Link></li>)}
        <li className="px-4 pb-2 pt-1 hover:scale-110"><Link onClick={() => {setAccessToken(''); sessionStorage.removeItem('key')}} to="/logout">logout</Link></li> {/* put a func here to delete accessToken from state as well as sessionStorage */}
    </ul>

  )
}
