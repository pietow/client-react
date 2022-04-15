/** @format */

export const initialState = {
    fname: 'dummy',
    lname: 'dummy',
    username: '',
    email: '',
    active: false,
    profile: {
        photo: '',
        onlineStatus: '',
        title: '',
        text: '',
        motto: '',
        gender: '',
        language: [],
        city: '',
        destrict: '',
        country: '',
        birthday: '',
    },
    accommodation: {
        availability: 'no',
        guests: '',
        description: '',
        location: '',
    },
}

export function userReducer(state, action) {
    switch (action.type) {
        case 'login_fetch': {
            return {
                ...action.user,
            }
        }
        case 'edit_accommodation': {
            return {
                ...state,
                location: 'HELOE WORLD',
            }
        }
        default: {
            return Error("something's wrong: " + action.type)
        }
    }
}
