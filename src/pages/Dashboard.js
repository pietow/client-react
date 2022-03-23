import React from 'react'
import Logo from '../components/Logo'
import PrevNextButtons from '../components/PrevNextButtons'
import {useState} from 'react'

export default function Dashboard({toggle}) {

  const [randomData, setRandomData] = useState([]);

  const getData = async () => {
  
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await response.json()
    setRandomData(result)
  }

  return (
    <div className={toggle ? "blur flex flex-col items-center space-y-10 bg-fixed bg-gradient-to-t from-pistachio-normal to-apricot-bright" :
    "flex flex-col items-center space-y-10 bg-fixed bg-gradient-to-t from-pistachio-normal to-apricot-bright"}> 
      <figure className="w-40 space-y-2 m-6">
        <img className="drop-shadow-lg rounded-full" src={'https://picsum.photos/200/200.jpg'} alt="lorem"/>
        <figcaption className="text-center" >inner width: {window.innerWidth}<br /> random data id: {randomData[10]?.id}</figcaption>
      </figure>
        <button onClick={getData} className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2">fetch data</button>

      <section className="flex flex-col items-center bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <h1 className="font-zeyada m-4 text-3xl">Maybe about the person</h1>
        <p className="rounded-md justify-center mx-4 p-2 bg-apricot-bright opacity-80">{randomData[10]?.title}
        </p>
        <PrevNextButtons />
      </section>

      <section className="flex flex-col items-center bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <h1 className="font-zeyada m-4 text-3xl">another section</h1>
        <p className="rounded-md justify-center mx-4 p-2 bg-apricot-bright opacity-80">{randomData[10]?.body}
        </p>
        <PrevNextButtons />
      </section>

      <section className="flex flex-col items-center bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <h1 className="font-zeyada m-4 text-3xl">and even more</h1>
        <p className="rounded-md justify-center mx-4 p-2 bg-apricot-bright opacity-80">{randomData[10]?.body}
        </p>
        <PrevNextButtons />
      </section>
      <Logo />
    </div>
  )
}
