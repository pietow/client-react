/** @format */

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EditNavbar() {
    return (
        <nav className="hidden md:block h-fit backdrop-brightness-75 backdrop-blur-lg drop-shadow-md border border-best-white rounded-md mr-3">
            <ul className="font-noto m-4 text-best-white flex flex-col gap-4 items-start pl-2">
                <li className="hover:scale-110">
                    <NavLink to="/profile">profile</NavLink>
                </li>
                <li className="hover:scale-110">
                    <NavLink to="/edithost">edit location</NavLink>
                </li>
                <li className="hover:scale-110">
                    <NavLink to="/editaccount">edit account</NavLink>
                </li>
                <li className="hover:scale-110">
                    <NavLink to="/editprofile">edit profile</NavLink>
                </li>
                <li className="hover:scale-110">
                    <NavLink to="/editphoto">edit photo</NavLink>
                </li>
            </ul>
        </nav>
    )
}
