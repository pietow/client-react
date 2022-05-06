/** @format */

import React, { useEffect, useState, useRef, useContext } from 'react'
import SmNavList from './smNavList.js'
import LgNavList from './lgNavList.js'
import Burger from './burger.js'
import LogoLinkHeader from '../LogoLinkHeader'
import { Link } from 'react-router-dom'
import { Authentication } from '../../context/accessTokenContext'

export default function Header({
    toggle,
    setToggle,
    dispatch,
    setChatValue,
    state,
}) {
    const ref = useRef()
    const accessToken = useContext(Authentication)

    const toggleBurger = (e) => {
        //menu visible or not?
        e.preventDefault()
        toggle ? setToggle(0) : setToggle(1)
    }

    const [thumbnail, setThumbnail] = useState('')

    useEffect(() => {
        const checkOutsideClick = (e) => {
            if (toggle && ref.current && !ref.current.contains(e.target))
                setToggle(0)
        }
        document.addEventListener('mousedown', checkOutsideClick)
        return () =>
            document.removeEventListener('mousedown', checkOutsideClick)
    }, [toggle, setToggle])

    useEffect(() => {
        if (accessToken) {
            const getThumbnail = async () => {
                await fetch(
                    `api/profile/${sessionStorage.getItem('user')}/thumbnail`,
                    {
                        method: 'GET',
                    },
                )
                    .then((response) => {
                        return response.json()
                    })
                    .then((url) => {
                        setThumbnail(url)
                        return
                    })
            }
            getThumbnail()
        }
    }, [thumbnail, state]) // eslint-disable-line

    return (
        <header className="flex flex-row items-center justify-evenly h-14 sticky top-0 z-10 bg-teal-normal border-b border-best-white">
            <LogoLinkHeader />
            <h2 className="hidden lg:block text-best-white underline underline-offset-8 decoration-1">
                Roam Mate
            </h2>
            <div className="flex items-center">
                <Link
                    title="go to profile"
                    to="/profile"
                    className={
                        accessToken
                            ? 'lg:order-none order-1 border border-best-white rounded-full w-12 h-12 overflow-hidden'
                            : 'hidden'
                    }>
                    <img src={thumbnail} alt="user profile" />
                </Link>
                <p className="pl-4 text-best-white">Hello {state.username} </p>
            </div>
            {/* ----------------------------BURGER MENU START------------------------------ */}

            <div className="lg:order-none order-last lg:hidden" ref={ref}>
                <div
                    onClick={(e) => toggleBurger(e)}
                    className={
                        toggle
                            ? 'transition duration-300 ease-in-out rotate-180 hover:bg-teal-bright active:bg-light-orange'
                            : 'ease-in-out transition duration-300 hover:bg-teal-bright active:bg-light-orange'
                    }>
                    <Burger />
                </div>
                <nav
                    className={
                        toggle
                            ? 'absolute drop-shadow-lg top-full left-0 w-full'
                            : 'hidden'
                    }>
                    <SmNavList
                        setChatValue={setChatValue}
                        toggle={toggle}
                        setToggle={setToggle}
                        dispatch={dispatch}
                    />
                </nav>
            </div>

            {/* ----------------------------BURGER MENU END-------------------------------- */}

            <nav className="hidden lg:block text-best-white font-noto top-11 absolute bg-teal-normal border-b border-x rounded-full">
                <LgNavList setChatValue={setChatValue} dispatch={dispatch} />
            </nav>
        </header>
    )
}
