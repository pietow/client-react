/** @format */

import React, { useState, useEffect, useReducer, useContext } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'
import { Authentication } from '../context/accessTokenContext'
import Home from './Home'
import editProfileInputList from '../data/editProfileInputList'

const initialValues = {
    fname: '',
    lname: '',
    username: '',
    email: '',
}

export default function EditProfile() {
    const [state, dispatch] = useReducer(reducer, { fetched: [] })
    const [values, setValues] = useState(initialValues)
    const [render, setRender] = useState(0)
    const accessToken = useContext(Authentication)

    useEffect(() => {
        ;(async () => {
            const response = await fetch(
                `api/users/${sessionStorage.getItem('user')}`,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${accessToken}`,
                    },
                },
            )
            const result = await response.json()
            dispatch({
                type: 'fetched_data',
                fetched: result,
            })
        })()
    }, [render])

    const editUserData = async (e) => {
        e.preventDefault()
        const responds = await fetch(
            `api/users/${sessionStorage.getItem('user')}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${accessToken}`,
                },
                body: JSON.stringify(state),
            },
        )
        const result = await responds.json()
        dispatch({
            type: 'modified_user',
            fname: state.fname,
            lname: state.lname,
            username: state.username,
            email: state.email,
            modification: result,
        })
        setValues(initialValues)
        render ? setRender(0) : setRender(1)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
        dispatch({
            type: 'changed_values',
            ...state,
            [name]: value.trim() === '' ? state.fetched[name] : value,
        })
    }

    const EditProfileInputs = (
        name,
        type,
        placeholder,
        phrase,
        state,
        values,
    ) => (
        <div key={name}>
            <p className="text-justify mx-4 mb-4 p-4 text-best-white">
                {phrase}: {state[name]}
            </p>
            <input
                value={values?.[name]}
                type={type}
                name={name}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
        </div>
    )

    if (accessToken) {
        return (
            <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker">
                {/* -----------------------profile pic start----------------------- */}
                <figure className="xl:w-60 xl:bottom-40 relative w-40 space-y-2 mt-6 lg:mt-14 flex flex-col items-center">
                    <img
                        className="xl:rounded-xl drop-shadow-lg rounded-full"
                        src={'https://picsum.photos/200/200.jpg'}
                        alt="lorem"
                    />
                    <figcaption className="text-best-white font-noto text-center">
                        {state.fetched.fname + ' ' + state.fetched.lname}
                    </figcaption>
                </figure>
                {/* -----------------------profile pic end------------------------- */}

                <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
                    {/* -----------------------profile section start------------------- */}

                    <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
                        <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 tex-3xl">
                            Change your Data
                        </h1>
                        <form onSubmit={editUserData}>
                            {editProfileInputList.map((elem) =>
                                EditProfileInputs(
                                    elem.name,
                                    elem.type,
                                    elem.placeholder,
                                    elem.phrase,
                                    state.fetched,
                                    values,
                                ),
                            )}

                            <button
                                type="submit"
                                className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2"
                            >
                                save data
                            </button>
                        </form>
                    </section>

                    {/* -----------------------profile section end--------------------- */}
                </div>
                <LogoLink />
            </main>
        )
    } else {
        return <Home />
    }
}
