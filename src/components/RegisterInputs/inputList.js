import React from 'react'

export default function InputList({data, setData}) {
  
    const inputList = [
        ['fname', 'text', 'FirstName'],
        ['lname', 'text', 'Last Name'],
        ['email', 'email', 'E-Mail'],
        ['username', 'text', 'Username'],
        ['password', 'password', 'Create Password'],
        ['rePassword', 'password', 'Repeat Password']
    ]
  
    return (
    <>
        {inputList.map(x => <input key={x[0]} onChange={e => setData(data, data[x[0]] = e.target.value)} className="p-1 m-1 rounded-md" type={x[1]} id={x[0]} name={x[0]} placeholder={x[2] + " *"}/>)}
    </>
  )
}
