/** @format */

export default function reducer(state, action) {
    switch (action.type) {
        case 'fetched_data': {
            //useEffect
            return {
                ...state,
                fetched: action.fetched,
            }
        }
        case 'changed_fname': {
            return {
                ...state,
                fname: action.fname,
            }
        }
        case 'changed_lname': {
            return {
                ...state,
                lname: action.lname,
            }
        }
        case 'changed_username': {
            return {
                ...state,
                username: action.username,
            }
        }
        case 'changed_email': {
          return {
            ...state,
            email: action.email,
          }
        }
        case 'modified_user': {
            state.fetched[0] = action.modification //wird in prod geändert!
            return {
                ...state,
            }
        }
        default: {
            return Error("something's wrong: " + action.type)
        }
    }
}
