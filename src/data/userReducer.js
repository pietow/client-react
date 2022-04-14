/** @format */

export const initialState = {
    fname: '',
    lname: '',
    username: '',
    email: '',
    active: false,
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
    //ACCOMMODATION
    availability: '',
    guests: '',
    description: '',
    location: '',
}

export function userReducer(state, action) {
    switch (action.type) {
        case 'edit_user': {
            return {
                ...action.user,
                ...state,
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
