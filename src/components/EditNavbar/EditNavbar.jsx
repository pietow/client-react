/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

export default function EditNavbar() {
    return (
        <nav className="hidden md:block h-fit p-4 flex flex-col backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md md:w-4/12 md:mr-3">
            <ul>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/edithost">location</Link>
                </li>
                <li>
                    <Link to="/editaccount">editaccount</Link>
                </li>
                <li>
                    <Link to="/editprofile">editprofile</Link>
                </li>
            </ul>
        </nav>
    )
}
