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
        text: 'dummy',
        motto: '',
        gender: '',
        language: [],
        city: '',
        destrict: '',
        country: '',
        birthdate: '',
        year: 'Year',
        month: 'Month',
        day: 'Day',
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
        default: {
            return Error("something's wrong: " + action.type)
        }
    }
}
