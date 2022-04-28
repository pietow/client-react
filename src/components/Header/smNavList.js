/** @format */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import linksHeader from '../../data/linksHeader.json'
import { Authentication } from '../../context/accessTokenContext'
import { SetAuthentication } from '../../context/setAccessTokenContext'

export default function SmNavList({ toggle, setToggle, dispatch }) {
    const setAccessToken = useContext(SetAuthentication)
    const accessToken = useContext(Authentication)

    const listElement = (name, path) => (
        <li
            onClick={() => setToggle()}
            key={name}
            className="hover:bg-light-orange hover:text-gray text-gray-dark active:outline active:outline-aero-blue pl-2 rounded">
            <Link className="pr-[54rem]" to={path}>
                {name}
            </Link>{' '}
            {/* without  pr-[54rem] area for Link not working; cheating^^*/}
        </li>
    )

    return (
        <ul className="font-noto flex flex-col z-10 bg-gradient-to-r from-lemon-meringue text-gray p-2 space-y-3 text-2xl rounded-md w-full">
            {linksHeader.reduce((result, current) => {
                if (accessToken) {
                    if (current.needsAccess || current.showAlways) {
                        const loggedIn = listElement(current.name, current.path)
                        result.push(loggedIn)
                    }
                } else {
                    if (!current.needsAccess) {
                        const loggedOut = listElement(
                            current.name,
                            current.path,
                        )
                        result.push(loggedOut)
                    }
                }
                return result
            }, [])}
            <li // seeing logout button depending on accessToken
                key="logout"
                className={
                    !accessToken
                        ? 'hidden'
                        : 'hover:bg-light-orange hover:text-gray-dark active:outline active:outline-aero-blue pl-2 rounded'
                }>
                <Link
                    className="pr-[54rem]"
                    onClick={() => {
                        dispatch({
                            type: 'reset_state',
                        })
                        setAccessToken('')
                        sessionStorage.removeItem('key')
                        setTimeout(() => {
                            //otherwise alert comes before re-rendering which looks stupid!
                            {
                                /* alert('logout successful.') */
                            }
                        }, 500)
                        sessionStorage.removeItem('user')
                        toggle ? setToggle(0) : setToggle(1)
                    }}
                    to="/">
                    logout
                </Link>
            </li>
        </ul>
    )
}
