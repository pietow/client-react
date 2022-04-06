import React, { useEffect, useReducer } from 'react'
import LogoLink from '../components/LogoLink'


const reducer = (state, action) => {
  switch (action.type) {
    case 'fetched_data': { //useEffect
      return {
        ...state,
        fetched: action.fetched
      }
    }
    case 'changed_fname': { //onChange im Input
      return {
        ...state,
        nextFname: action.nextFname,
      }
    }
    case 'saved_data': { //onSubmit
      return {
        ...state,
        fname: action.nextFname,
        nextFname: ''
      }
    }
    case 'modified_user': {
      state.fetched[0] = action.modification//wird in prod geändert!
      return {
        ...state
      }
    }
  }
  throw Error('something\'s wrong: ' + action.type)
}

export default function EditProfile() {

  const [state, dispatch] = useReducer(reducer, {fetched: [], fname: '', nextFname: ''})

  const fetching = async () => {
    const response = await fetch('api/users/', {
      method: "GET",
      headers: {'content-type':'application/json'}
    });
    const result = await response.json()
    dispatch({
      type: 'fetched_data',
      fetched: result
    })
  }  

  useEffect(() => {
    fetching()
  }, [])

  /* ggggggggggggggggggg */
  const editUserData = async () => { //clickHerbert
    const responds = await fetch(`api/users/${state.fetched[0]?._id}`, {
      method: "PUT",
      headers: {'content-type':'application/json'},
      body: JSON.stringify(state) //state is an object
    });
    const result = await responds.json()
    dispatch({
      type: 'modified_user',
      modification: result
    })
  }
  /* ggggggggggggggggggg */
  
  // const state.fetched[0] = state.fetched[0]
  
  const inputChangeFname = e => {
    e.preventDefault()  
    dispatch({
      type: 'changed_fname',
      nextFname: e.target.value === '' ? state.fetched[0].fname : e.target.value
  })}


  const saveData = e => {

    e.preventDefault()
    dispatch({
      type: 'saved_data',
      nextFname: state.nextFname === '' ? state.fname : state.nextFname
    })
    document.getElementById('fname').value = ''

  }


  return (
    <main className="xl:flex-row xl:justify-center flex flex-col items-center bg-cover bg-left bg-fixed bg-backpacker"> 
      
      {/* -----------------------profile pic start----------------------- */}
      <figure className="xl:w-60 xl:bottom-40 relative w-40 space-y-2 mt-6 lg:mt-14 flex flex-col items-center">
        <img className="xl:rounded-xl drop-shadow-lg rounded-full" src={'https://picsum.photos/200/200.jpg'} alt="lorem"/>
        <figcaption className="text-best-white font-noto text-center">{state.fetched[0]?.fname}</figcaption>
    </figure>
      {/* -----------------------profile pic end------------------------- */}


      <div className="xl:w-2/3 xl:h-screen xl:justify-center flex flex-col items-center">
      
      {/* -----------------------profile section start------------------- */}
      
      <section className="w-2/3 flex flex-col items-center backdrop-brightness-75 backdrop-blur-lg m-4 drop-shadow-md border border-best-white rounded-md">
        <h1 className="underline underline-offset-8 decoration-1 text-best-white m-4 tex-3xl">{state.fetched[0]?.fname}</h1>
        <form onSubmit={saveData}>
       
        <p className="text-justify mx-4 mb-4 p-4 text-best-white">fname: {state.fetched[0]?.fname}</p>
          <input id="fname" value={state.fetched[0]?.nextFname} type="text" onChange={inputChangeFname} placeholder="enter new fname here"/>
       
          <button type='submit' className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2">save data</button>
        </form>
        <button onClick={editUserData} className="active:scale-95 mx-auto m-2 p-1 border border-best-white text-best-white rounded w-1/2">click Herbert</button>
      </section>

      {/* -----------------------profile section end--------------------- */}

      </div>
      <LogoLink />
    </main>
  )
}
