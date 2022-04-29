/** @format */

import React from 'react'

export default function Gender({ state, dispatch, setSavable, styles }) {
    const gender = {
        "I'd rather not tell": '',
        'Female': 'Female',
        'Male': 'Male',
        'Non-binary': 'Non-binary',
        'Other': 'Other',
    }
    function changeHandler(newValue, type, key) {
        setSavable(true)
        dispatch({
            type: type,
            payload: {
                [key]: newValue,
            },
        })
    }
    return (
        <div>
            <div className={styles.container}>
                <label htmlFor="gender" className={styles.label}>
                    Gender
                </label>
                <div className="w-6/12 ml-8">
                    <select
                        id="gender"
                        type="text"
                        value={state.profile?.gender ?? 'fail'}
                        onChange={(e) => {
                            changeHandler(
                                e.target.value,
                                'update_profile',
                                'gender',
                            )
                        }}
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
        </div>
    )
}
