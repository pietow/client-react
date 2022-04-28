/** @format */

export const initialState = {
    fname: '',
    lname: '',
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
        district: '',
        country: '',
        birthdate: '',
        year: 'Year',
        month: 'Month',
        day: 'Day',
    },
    accommodation: {
        availability: 'No',
        guests: 0,
        description: '',
        location: '',
    },
}

export function userReducer(state, action) {
    switch (action.type) {
        case 'login_fetch': {
            return {
                ...state,
                ...action.user,
            }
        }
        case 'update_user': {
            return {
                ...state,
                ...action.payload,
            }
        }
        case 'update_profile': {
            return {
                ...state,
                profile: { ...state.profile, ...action.payload },
            }
        }
        case 'update_accommodation': {
            return {
                ...state,
                accommodation: {
                    ...state.accommodation,
                    ...action.payload,
                },
            }
        }
        case 'reset_state': {
            return initialState
        }
        default: {
            return Error("something's wrong: " + action.type)
        }
    }
}
