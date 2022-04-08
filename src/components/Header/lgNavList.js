import React, { useContext } from 'react'
import {  Link } from 'react-router-dom'
import linksHeader from '../../data/linksHeader.json'
import { Authentication } from '../../context/accessTokenContext'
import { SetAuthentication } from '../../context/setAccessTokenContext'


export default function LgNavList() {

  const setAccessToken = useContext( SetAuthentication )
  const accessToken = useContext(Authentication)

  const listElement = (name, path) => <li key={name} className="px-4 pb-2 pt-1 hover:scale-110">
                                        <Link to={path}>{name}</Link>
                                      </li>

  return (
    <ul className="flex">
      {linksHeader.reduce((result, current) => {
        if(accessToken) {
          if(current.needsAccess || current.showAlways) {
            const loggedIn = listElement(current.name, current.path)
            result.push(loggedIn)
          }
        } else {
          if(!current.needsAccess) {
            const loggedOut = listElement(current.name, current.path)
            result.push(loggedOut)
          }
        }
        return result
      }, [])}
      <li key="logout" className={!accessToken ? "hidden" : "px-4 pb-2 pt-1 hover:scale-110"}>
        <Link onClick={() => {setAccessToken(''); sessionStorage.removeItem('key'); /* sessionStorage.removeItem('user'); */ alert('logout successful.')}} to="/">logout</Link>
      </li>
    </ul>
  )
}