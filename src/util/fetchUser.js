/** @format */
;(function () {
    'use strict'

    module.exports = { getUser: fetchUser('GET'), putUser: fetchUser('PUT') }

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
            console.log(result)
            console.log(verb)
            if (!result.error) {
                dispatch({
                    type: 'login_fetch',
                    user: result,
                })
            }
        }
    }
})()
