/** @format */

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import linksFooter from '../../data/linksFooter.json'
import { Authentication } from '../../context/accessTokenContext'

export default function Footer() {
    const accessToken = useContext(Authentication)

    const listElement = (name, path) => (
        <Link
            key={name}
            to={path}
            className="text-sm uppercase text-gray-dark font-noto">
            {name}
        </Link>
    )

    return (
        <footer className="bg-pistachio-dark h-20 border-t-2 border-teal-dark flex flex-col justify-center items-center">
            <nav className="">
                <ul className="space-x-5">
                    {linksFooter.map((elem) => {
                        if (accessToken && elem.showAlways) {
                            return listElement(elem.name, elem.path)
                        } else if (!accessToken) {
                            return listElement(elem.name, elem.path)
                        }
                    })}
                </ul>
            </nav>
            <p className="text-sm">
                Copyright bla bla bla and photo credits here
            </p>
        </footer>
    )
}
