/** @format */

export default function validateRegister(input, callback) {
    for (const key in input) {
        if (input[key].trim() === '') return alert(`no input in ${key}`)
    }
    if (input.password !== input.rePassword)
        return alert("passwords don't match")
    if (
        !input.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    )
        return alert('email kaputt')
    callback()
}
