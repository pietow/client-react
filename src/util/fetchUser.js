/** @format */
;(function () {
    'use strict'

    module.exports = {
        getUser: fetchUser('GET'),
        putUser: fetchUser('PUT'),
        postUser: fetchUser('POST'),
        deleteUser: fetchUser('DELETE'),
    }

    function fetchUser(verb) {
        return async function putUser(url, accessToken, dispatch, input) {
            const req = {
                method: verb,
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${accessToken}`,
                },
            }
            if (input) req.body = JSON.stringify(input)
            const response = await fetch(url, req)
            const result = await response.json()
            const profile = result.profile
            const accommodation = result.accommodation
            delete result.profile
            delete result.accommodation
            if (!result.error && verb !== 'POST') {
                dispatch({
                    type: 'update_user',
                    payload: result,
                })
                dispatch({
                    type: 'update_profile',
                    payload: profile,
                })
                dispatch({
                    type: 'update_accommodation',
                    payload: accommodation,
                })
            }
            return new Promise((resolve, reject) => {
                if (result.error) {
                    reject(result)
                } else {
                    resolve(result)
                }
            })
        }
    }
})()
