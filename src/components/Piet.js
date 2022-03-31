import React from 'react'


export default function Piet() {


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setRandomUser(result);
      // console.log(result, 'hi')
    }
    getData()
  },[])


  return (
    <>
      <div id="joke">nothing here</div>
    </>
  )
}
