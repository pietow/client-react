/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import linksFooter from '../../data/linksFooter.json'


export default function Footer() {
    return (
        <footer className="bg-pistachio-dark h-20 border-t-2 border-teal-dark flex flex-col justify-center items-center">
                <nav className="" >
                    <ul className="space-x-5">
                        {linksFooter.map(item => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-sm uppercase text-gray-dark font-noto">
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </nav>
            <p className="text-sm">
                Copyright bla bla bla and photo credits here
            </p>
        </footer>
    )
}