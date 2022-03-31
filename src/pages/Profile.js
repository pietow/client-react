import React from 'react'
import LogoLink from '../components/LogoLink'
import ProfileSection from '../components/ProfileSection'
import ProfilePic from '../components/ProfilePic'


export default function Profile() {

  /* const [randomData, setRandomData] = useState([]); */


  /* const getUser = async () => {
    const response = await fetch('api/users/', {
      method: "GET",
      headers: {'content-type':'application/json'}
    });
    const result = await response.json();
  } */

  return (
    <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker"> 
      <ProfilePic />
      <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
        <ProfileSection heading={'about me'} randomData='maybe email address or some other stuff. bio could work. or places one has already seen. hobbies is an alternative. maybe one is a good chef and welcomes people to have a nice meal together. By the way, this text is set in <text-justify> so that the right side of the text is also nicely aligned. I just want to see how this paragraph works with a lot of text in it. And lorem ipsum is boring! etc etc etc'/>
        <ProfileSection heading={'about my dear guests'} randomData='My guests shall pay a lot and do the dishes twice a day. My fridge needs to be filled at least every other day past noon. I like to sleep long so NO KIDS. I snore though.' />
        <ProfileSection heading={'i speak'} randomData={'french, japanese, german, english, dutch (maybe insert tiny icon flags here)'}/>
      </div>
      <LogoLink />
    </main>
  )
}