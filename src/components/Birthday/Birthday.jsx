/** @format */
import React, { useState, useEffect, useRef } from 'react'
import { dateArr } from '../../data/datesArray'

export default function Birthday({ state, dispatch, setSavable, styles }) {
    const [days, setDays] = useState([
        'Day',
        ...[...Array(31).keys()].map((x) => x + 1),
    ])

    styles = { ...styles, input: `${styles.input} mb-2 md:mb-0` }

    const dates = dateArr()

    //REDUCE ARRAY OF DATE OBJECT TO GET UNIQUE YEAR/MONTH VALUES
    const yearRange = dates.reduce((acc, b) => {
        acc['YEAR'] = acc['YEAR'] ? acc['YEAR'] : {}
        acc['MONTH'] = acc['MONTH'] ? acc['MONTH'] : {}
        acc['YEAR'][b.year] = b.year
        acc['MONTH'][b.month] = b.month
        return acc
    }, {})
    const years = ['Year', ...[...Object.keys(yearRange['YEAR'])].reverse()]
    const months = ['Months', ...Object.keys(yearRange['MONTH'])]

    //CALCULATE DAYS
    function getDays(month, year) {
        setSavable(true)
        if (month === 'Month' || year === 'Year') {
            month = 1
            year = 2000
        }
        month = month ? month : 1
        year = year ? year : 2000
        const newDays = dates.reduce((acc, b) => {
            if (b.year === year && b.month === month) {
                acc[b.day] = b.day
            }
            return acc
        }, {})
        return ['Day', ...Object.keys(newDays)]
    }

    //SET DATE STATE
    function handleYear(e) {
        const year = Number(e.target.value)
        console.log(year)
        const newDays = getDays(state.profile.month, year)
        setDays(newDays)
        dispatch({
            type: 'update_profile',
            payload: {
                year: year,
            },
        })
    }
    function handleMonth(e) {
        const month = Number(e.target.value)
        console.log(month)
        const newDays = getDays(month, state.profile.year)
        setDays(newDays)
        dispatch({
            type: 'update_profile',
            payload: {
                month: month,
            },
        })
    }
    function handleDay(e) {
        const day = Number(e.target.value)
        console.log(day)
        setSavable(true)
        dispatch({
            type: 'update_profile',
            payload: {
                day: day,
            },
        })
    }

    return (
        <div className={styles.container}>
            <label htmlFor="birthday" className={styles.label}>
                Birthday
            </label>
            <div className="flex flex-col md:flex-row w-6/12 ml-8">
                <select
                    value={state.profile.month}
                    type="text"
                    onChange={(e) => {
                        handleMonth(e)
                    }}
                    id="month"
                    className={`${styles.input}`}>
                    {months.map((key, i) => {
                        return (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        )
                    })}
                </select>
                <select
                    value={state.profile.day}
                    type="text"
                    onChange={(e) => handleDay(e)}
                    id="day"
                    className={styles.input}>
                    {days.map((key, i) => {
                        return (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        )
                    })}
                </select>
                <select
                    value={state.profile.year}
                    type="text"
                    onChange={(e) => handleYear(e)}
                    id="year"
                    className={styles.input}>
                    {years.map((key, i) => {
                        return (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
