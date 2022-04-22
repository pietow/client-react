/** @format */
import React, { useState, useEffect, useRef } from 'react'
import { dateArr } from '../../data/datesArray'

export default function Birthday({ state, savable, setSavable, styles }) {
    const previousDays = useRef([])

    const [dateSelection, setDateSelection] = useState({
        year: 'Year',
        month: 'Month',
        day: 'Day',
    })
    const [days, setDays] = useState([
        'Day',
        ...[...Array(31).keys()].map((x) => x + 1),
    ])

    //SAVE PREVIOUS STATE WITHOUT INFINITE RENDER
    useEffect(() => {
        if (previousDays.current.length !== days.length) {
            setDateSelection((c) => ({ ...c, day: 'Day' }))
        }
        previousDays.current = days
    }, [days])

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
        const newDays = getDays(dateSelection.month, year)
        setDays(newDays)
        setDateSelection({ ...dateSelection, year: year })
    }
    function handleMonth(e) {
        const month = Number(e.target.value)
        const newDays = getDays(month, dateSelection.year)
        setDays(newDays)
        setDateSelection({ ...dateSelection, month: month })
    }
    function handleDay(e) {
        setDateSelection({ ...dateSelection, day: Number(e.target.value) })
    }

    return (
        <div className={styles.container}>
            <label htmlFor="birthday" className={styles.label}>
                Birthday
            </label>
            <div className="flex flex-col md:flex-row w-6/12 ml-8">
                <select
                    id="month"
                    type="text"
                    onClick={handleMonth}
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
                    type="text"
                    value={dateSelection.day}
                    onChange={(e) =>
                        setDateSelection((c) => ({ ...c, day: e.target.value }))
                    }
                    onClick={handleDay}
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
                    type="text"
                    onClick={handleYear}
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
