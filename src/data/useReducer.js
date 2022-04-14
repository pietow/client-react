export default function reducer(state, action) {
  switch (action.type) {
    case 'fetched_data': { //useEffect
      return {
        ...state,
        fetched: action.fetched
      }
    }
    case 'changed_values': {
      return {
        ...state,
        fname: action.fname,
        lname: action.lname,
        username: action.username,
        email: action.email,
      }
    }
    case 'modified_user': {
      state.fetched[0] = action.modification//wird in prod geändert!
      return {
        ...state
      }
    }
    default: {
      return Error('something\'s wrong: ' + action.type)
    }
  }
}