/** @format */
import React, { useState } from 'react'
import { dateArr } from '../../data/datesArray'

export default function Birthday({ state, savable, setSavable, styles }) {
    const [dateSelection, setDateSelection] = useState({
        year: 'Year',
        month: 'Month',
        day: 'Day',
    })

    styles = { ...styles, input: `${styles.input} mb-2 md:mb-0` }

    const dates = dateArr()
    const yearRange = dates.reduce((acc, b) => {
        acc['YEAR'] = acc['YEAR'] ? acc['YEAR'] : {}
        acc['MONTH'] = acc['MONTH'] ? acc['MONTH'] : {}
        acc['YEAR'][b.year] = b.year
        acc['MONTH'][b.month] = b.month
        return acc
    }, {})
    const years = ['Year', ...Object.keys(yearRange['YEAR'])]
    const months = ['Month', ...Object.keys(yearRange['MONTH'])]

    //CALCULATE DAYS
    function getDays(month, year) {
        if (month === 'month' && year === 'year') {
            month = 1
            year = 2000
        }
        console.log(year)
        console.log(month)
        const days = dates.reduce((acc, b) => {
            if (b.year === year && b.month === month) {
                acc[b.day] = b.day
            }
            return acc
        }, {})
        return ['Day', ...Object.keys(days)]
    }

    //SET DATE STATE
    function handleClick(e) {
        setDateSelection({ ...dateSelection, [e.target.id]: e.target.value })
        console.log(getDays(dateSelection.month, dateSelection.year))
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
                    onClick={handleClick}
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
                    id="day"
                    onClick={handleClick}
                    className={styles.input}>
                    {getDays(2, 2020).map((key, i) => {
                        return (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        )
                    })}
                </select>
                <select
                    type="text"
                    onClick={handleClick}
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
