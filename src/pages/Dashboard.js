import React from 'react'
import Logo from '../components/Logo'
import PrevNextButtons from '../components/PrevNextButtons'
import DashboardSection from '../components/DashboardSection'
import {useState} from 'react'
import DashboardPic from '../components/DashboardPic'

export default function Dashboard() {

  const [randomData, setRandomData] = useState([]);

  const getUser = async () => {
    const response = await fetch('api/users/', {
      method: "GET",
      headers: {'content-type':'application/json'}
    });
    const result = await response.json();

    setRandomData(result)
  }

  console.log(randomData)

  return (
    <div className="flex flex-col items-center space-y-10 bg-fixed bg-gradient-to-t from-pistachio-normal to-apricot-bright"> 
      <DashboardPic randomData={randomData}/>
        <button onClick={getUser} className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2">fetch data</button>

      <DashboardSection randomData={randomData}/>
      <PrevNextButtons /> 
      <Logo />
    </div>
  )
}
