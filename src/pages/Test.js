import React, {useEffect, useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetched_data': {
      return {
        fetched: action.fetched
      }
    }
  }
  throw Error('something\'s wrong here:\n' + action.type)
}

export default function Test() {
  
  const [state, dispatch] = useReducer(reducer, {fetched: ''})
  
  const fetching = async () => {
    const responds = await fetch('api/users/', {
      method: "GET",
      headers: {'content-type': 'application/json'}
    })
    const result = await responds.json();
    dispatch({
      type: 'fetched_data',
      fetched: result
    })
  }

  useEffect(() => {
    fetching()
    // console.log(state.fetched[0]?.fname) //gives undefined
  }, [])
  // console.log(state.fetched[0]?.fname) //gives undefined and actual data
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray">
      <p className="text-best-white text-xl text-center">TEST<br/>{state.fetched[0]?.fname}</p>
    </div>
  )
}