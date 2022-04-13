export default function reducer(state, action) {
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
        fname: action.fname,
      }
    }
    case 'changed_lname': { //onChange im Input
      return {
        ...state,
        lname: action.lname,
      }
    }
    case 'changed_username': { //onChange im Input
      return {
        ...state,
        username: action.username,
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