/** @format */

import React, { useState, useEffect } from 'react'
import { dateArr } from '../../data/datesArray'
import Birthday from '../Birthday'

export default function BasicsInput({
    description,
    savable,
    setSavable,
    input,
    setInput,
}) {
    useEffect(() => {
        setInput((oldInput) => ({ ...oldInput, text: description.text }))
    }, [setInput, description])

    const styles = {
        label: 'w-28 text-right text-best-white text-sm',
        input: 'py-1 bg-best-white text-sm px-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:border-pistachio-dark focus:border-2 shadow-pistachio-dark focus:shadow-lg selection:bg-pistachio-dark',
        container: 'flex mb-4 items-center',
    }

    const gender = {
        "I'd rather not tell": '',
        'Female': 'Female',
        'Male': 'Male',
        'Non-binary': 'Non-binary',
        'Other': 'Other',
    }

    return (
        <div className="flex flex-col">
            <div>
                <div className={styles.container}>
                    <label htmlFor="fname" className={styles.label}>
                        First Name
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="fname"
                            type="text"
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="lname" className={styles.label}>
                        Last Name
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="lname"
                            type="text"
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="motto" className={styles.label}>
                        Short tagline
                    </label>
                    <div className="w-6/12 ml-8">
                        <input
                            id="motto"
                            type="text"
                            className={styles.input}
                        />
                        <p className="text-best-white text-sm mt-1 selection:bg-pistachio-dark selection:text-gray-900">
                            What is your mission or life motto?
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="gender" className={styles.label}>
                        I Am
                    </label>
                    <div className="w-6/12 ml-8">
                        <select
                            id="gender"
                            type="text"
                            className={styles.input}>
                            {Object.keys(gender).map((key, i) => {
                                return (
                                    <option key={i} value={gender[key]}>
                                        {key}
                                    </option>
                                )
                            })}
                        </select>
                        <p className="text-best-white text-sm mt-1 selection:bg-pistachio-dark selection:text-gray-900">
                            What is your mission or life motto?
                        </p>
                    </div>
                </div>
                <Birthday
                    state={description}
                    savable={savable}
                    setSavable={setSavable}
                    styles={styles}></Birthday>
            </div>
        </div>
    )
}
