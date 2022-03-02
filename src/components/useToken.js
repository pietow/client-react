/** @format */

import { useState } from 'react'

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token //ES2020 conditional property access; D.Flanagan pg. 137
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
    }

    //an object will give users a chance to destructure only the values they want if you reuse this in another component
    return {
        setToken: saveToken,
        token,
    }
}
