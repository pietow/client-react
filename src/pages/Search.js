/** @format */

import React, { useContext, useState, useEffect, useRef } from 'react'
import LogoLink from '../components/LogoLink'
import { getUsers } from '../util/fetchUser'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'

export default function Search({ state }) {
    const accessToken = useContext(Authentication)

    const [search, setSearch] = useState('')
    const [foundUsers, setFoundUsers] = useState([])
    const USERS = useRef([])

    useEffect(() => {
        const usersURL = '/api/users/'
        getUsers(usersURL, accessToken)
            .then((users) => {
                USERS.current = users
            })
            .catch((e) => console.log(e))
    }, [accessToken])

    function filter(e) {
        const users = USERS.current.filter(
            (user) => user.accommodation.place === e.target.value,
        )
        setFoundUsers(users)
        setSearch(e.target.value)
    }

    const styles = {
        label: 'w-28 text-right text-best-white text-sm',
        input: 'p-3 text-lg bg-best-white text-sm w-full border border-gray-300 rounded-sm focus:outline-none focus:border-pistachio-dark focus:border-2 shadow-pistachio-dark focus:shadow-lg selection:bg-pistachio-dark',
        container: 'flex mb-4 items-center',
        btnClass: 'active:scale-95  w-fit mb-7 p-2 text-best-white',
    }

    if (accessToken) {
        return (
            <main className="xl:flex-row min-h-full xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                <div className="w-full">
                    <input
                        id="search"
                        type="text"
                        value={search}
                        onChange={filter}
                        className={styles.input}
                        placeholder="Search places"
                    />
                </div>
                <div className="w-11/12 xl:w-2/3 h-screen xl:justify-center flex flex-col items-center">
                    <div className="w-full rounded-md border m-2">
                        <table className="w-full table-auto md:table-fixed text-best-white">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Availabilty</th>
                                    <th>Guests</th>
                                    <th>Place</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foundUsers.map((user, i) => {
                                    return (
                                        <tr className="border-t" key={i}>
                                            <td className="border-r text-center w-3/12 p-4">
                                                {user.username}
                                            </td>
                                            <td className="border-r text-center w-3/12 p-4">
                                                {
                                                    user.accommodation
                                                        .availability
                                                }
                                            </td>
                                            <td className="border-r text-center w-3/12 p-4">
                                                {user.accommodation?.place}
                                            </td>
                                            <td className="border-r text-center w-3/12 p-4">
                                                {user.accommodation.guests}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <LogoLink />
            </main>
        )
    } else return <Home />
}
