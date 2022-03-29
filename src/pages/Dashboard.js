import React from 'react'
import Logo from '../components/Logo'
import PrevNextButtons from '../components/PrevNextButtons'
import DashboardSection from '../components/DashboardSection'
import {useState} from 'react'
import DashboardPic from '../components/DashboardPic'
import NextButton from '../components/PrevNextButtons/NextButton'
import PrevButton from '../components/PrevNextButtons/PrevButton'

export default function Dashboard() {

  const [randomData, setRandomData] = useState([]);


  /* const getUser = async () => {
    const response = await fetch('api/users/', {
      method: "GET",
      headers: {'content-type':'application/json'}
    });
    const result = await response.json();

    setRandomData(result)
  } */

  return (
    <div className="flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker"> 
      <div className='flex items-center'>
        <PrevButton />
        <div>
          <DashboardPic randomData={randomData[0]?.fname}/>
        </div>
        <NextButton />
      </div>
      <DashboardSection heading={'hi, i am'} randomData={'Heinz Ketchup'}/>
      <DashboardSection heading={'about me'} randomData='maybe email address or some other stuff. bio could work. or places one has already seen. hobbies is an alternative. maybe one is a good chef and welcomes people to have a nice meal together. By the way, this text is set in <text-justify> so that the right side of the text is also nicely aligned. I just want to see how this paragraph works with a lot of text in it. And lorem ipsum is boring! etc etc etc'/>
      <DashboardSection heading={'about my dear guests'} randomData='My guests shall pay a lot and do the dishes twice a day. My fridge needs to be filled at least every other day past noon. I like to sleep long so NO KIDS. I snore though.' />
      <DashboardSection heading={'tongues i might understand'} randomData={'french, japanese, german, english, dutch (maybe insert tiny icon flags here)'}/>
      <PrevNextButtons />
      <div className="bg-best-white opacity-50 w-fit my-20 scale-[2] border border-best-white rounded-full">
        <a href="/"><Logo /></a>
      </div>
    </div>
  )
}
