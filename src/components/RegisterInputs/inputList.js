import React from 'react'

export default function InputList({data, setData}) {
  
    const inputList = [ //
        ['fname', 'text', 'FirstName'],
        ['lname', 'text', 'Last Name'],
        ['email', 'email', 'E-Mail'],
        ['username', 'text', 'Username'],
        ['password', 'password', 'Create Password'],
        ['rePassword', 'password', 'Repeat Password']
    ]
  
    return (
    <>
        {inputList.map(x => <input key={x[0]} onChange={e => setData(data, data[x[0]] = e.target.value)} className="mt-4 mx-4 p-1 rounded opacity-70" type={x[1]} id={x[0]} name={x[0]} placeholder={x[2] + " *"}/>)}
    </>
  )
}
