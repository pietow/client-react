import React from 'react'
import Logo from '../components/Logo'
// import PrevNextButtons from '../components/PrevNextButtons'
import DashboardSection from '../components/DashboardSection'
import {useState} from 'react'
import DashboardPic from '../components/DashboardPic'
import NextButton from '../components/PrevNextButtons/NextButton'
import PrevButton from '../components/PrevNextButtons/PrevButton'

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

  return (
    <div className="flex flex-col items-center space-y-10 bg-fixed bg-gradient-to-t from-pistachio-normal to-apricot-bright"> 
      <div className='flex items-center'>
        <PrevButton />
        <div>
          <DashboardPic randomData={randomData[0]?.fname}/>
        </div>
        <NextButton />
      </div>
          <button onClick={getUser} className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2">fetch data</button>
      <DashboardSection heading={'name'} randomData={randomData[0]?.fname + ' ' + randomData[0]?.lname}/>
      <DashboardSection heading={'email address'} randomData={randomData[0]?.email}/>
      <Logo />
    </div>
  )
}
