import React, { useReducer } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'


const initialState = {
  name: 'Herbert', 
  nextName:'',
  age: '',
  nextAge: '',
  bio: '',
  nextBio: ''
}


export default function Profile() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const inputChangeName = e => {
    e.preventDefault()  
    dispatch({
      type: 'changed_name',
      nextName: e.target.value === '' ? state.name : e.target.value
  })}

  const inputChangeAge = e => {
    e.preventDefault()
    dispatch({
      type: 'changed_age',
      nextAge: e.target.value === '' ? state.age : e.target.value 
  })}

  const inputChangeBio = e => {
    e.preventDefault()
    dispatch({
      type: 'changed_bio',
      nextBio: e.target.value === '' ? state.bio : e.target.value
    })
  }

  const saveData = e => {
    e.preventDefault()
    dispatch({
      type: 'saved_data',
      nextName: state.nextName === '' ? state.name : state.nextName, 
      nextAge: state.nextAge === '' ? state.age : state.nextAge,
      nextBio: state.nextBio === '' ? state.bio : state.nextBio
  })}

  return (
    <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker"> 
      
      {/* -----------------------profile pic start----------------------- */}
      <figure className="xl:w-60 xl:bottom-40 relative w-40 space-y-2 mt-6 lg:mt-14 flex flex-col items-center">
        <img className="xl:rounded-xl drop-shadow-lg rounded-full" src={'https://picsum.photos/200/200.jpg'} alt="lorem"/>
        <figcaption className="text-best-white font-noto text-center">Here User Name</figcaption>
    </figure>
      {/* -----------------------profile pic end------------------------- */}


      <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
      
      {/* -----------------------profile section start------------------- */}
      
      <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
        <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 text-3xl">User Data</h1>
        <p className="text-justify mx-4 mb-4 p-4 text-best-white">name: {state.name}</p>
        <p className="text-justify mx-4 mb-4 p-4 text-best-white">age: {state.age}</p>
        <p className="text-justify mx-4 mb-4 p-4 text-best-white">bio: {state.bio}</p>
        <form onSubmit={saveData}>
          <input value={state.nextName} type="text" onChange={inputChangeName} placeholder="enter new name here"/>
          <input value={state.nextAge} type="number" onChange={inputChangeAge} placeholder="enter age here"/>
          <textarea className="mt-4 mx-4 p-1 rounded opacity-70 h-48" value={state.nextBio} onChange={inputChangeBio} placeholder="Your message here..."></textarea>
          <button type='submit' className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2">save data</button>
        </form>
      </section>

      {/* -----------------------profile section end--------------------- */}

      </div>
      <LogoLink />
    </main>
  )
}
