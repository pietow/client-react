import React, { useReducer } from 'react';
// import reducer from '../data/useReducer'


/* ________________________________________ */
const initialState = { name: 'Jochen', age: 100 };
/* ________________________________________ */


export default function Form() {

/* pppppppppppppppppppppppppppppppppppppppp */
  const [state, dispatch] = useReducer(reducer, initialState);
/* pppppppppppppppppppppppppppppppppppppppp */

/* ---------------------------------------- */
  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }
/* ---------------------------------------- */

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}
