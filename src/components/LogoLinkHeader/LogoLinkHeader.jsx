/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function LogoLinkHeader() {
    return (
        <Link
            title="go home"
            to="/"
            className="lg:order-none order-2 border border-best-white rounded-full">
            <Logo />
        </Link>
    )
}
