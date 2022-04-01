import React, { useReducer } from 'react';

/* ++++++++++++++++++++++++++++++++++++++++ */
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        age: state.age + 1,
        name: state.name
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}
/* ++++++++++++++++++++++++++++++++++++++++ */


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
