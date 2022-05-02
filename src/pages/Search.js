/** @format */

import React, { useContext, useState, useEffect, useRef } from 'react'
import LogoLink from '../components/LogoLink'
import { getUsers } from '../util/fetchUser'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import SendBtn from '../components/SendBtn'

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
        table: 'w-full table-auto md:table-fixed text-best-white',
        tableContainer: 'w-full rounded-md border m-2',
    }

    if (accessToken) {
        return (
            <main className="xl:flex-row xl:p-16 min-h-full relative  flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker md:p-4 lg:pt-10 md:flex-row md:items-start">
                <div className="w-full md:w-fit xl:w-2/12 xl:mx-auto">
                    <input
                        id="search"
                        type="text"
                        value={search}
                        onChange={filter}
                        className={styles.input + ''}
                        placeholder="Search places"
                    />
                </div>
                <div className="w-11/12 md: lg:w-7/12 md:mx-auto xl:w-6/12 h-screen flex flex-col">
                    <div
                        className={`${styles.tableContainer} ${
                            foundUsers.length === 0 ? 'hidden' : ''
                        }`}>
                        <table className={`${styles.table}`}>
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
                                                <p className="mb-2">
                                                    {user.username}
                                                </p>
                                                <div className="flex justify-center items-center gap-2">
                                                    <div
                                                        className={
                                                            !false
                                                                ? 'w-4 h-4 bg-red-600 rounded-full'
                                                                : 'hidden'
                                                        }></div>
                                                    <button className="active:scale-95 p-1 border border-best-white text-best-white rounded w-1/2">
                                                        Talk
                                                    </button>
                                                </div>
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
