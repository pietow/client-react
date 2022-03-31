//rfc shortcut
import React from 'react'
import {useState, useEffect} from 'react'



export default function Piet() {

  const [randomUser, setRandomUser] = useState('')
 
  

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setRandomUser(result);
      // console.log(result, 'hi')
    }
    getData()
  },[])

  // console.log(randomUser, 'ho')

  return (
    <>
      <div id="joke">nothing here</div>
    </>
  )
}
