import React, { useReducer } from 'react'
import LogoLink from '../components/LogoLink'
import reducer from '../data/useReducer'


const initialState = {name: 'Herbert', nextName:''}


export default function Profile() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  function inputChange(e) {
    dispatch({
      type: 'changed_target_value',
      payload: e.target.value
    })
  }

  function saveName(e) {
    e.preventDefault()
    dispatch({
      type: 'saved_name',
      payload: state.nextName
    })
  }

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
        <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 text-3xl">from now on this shall be you name</h1>
        <p className="text-justify mx-4 mb-4 p-4 text-best-white">{state.name}</p>
        <form onSubmit={saveName}>
          <input value={state.nextName} onChange={inputChange} placeholder="enter new name here"/>
          <button type='submit' className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2">show change</button>
        </form>
      </section>
     
      {/* -----------------------profile section end--------------------- */}

      </div>
      <LogoLink />
    </main>
  )
}
