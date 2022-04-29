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
            if (!result.error && verb !== 'POST') {
                dispatch({
                    type: 'update_user',
                    payload: result,
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
