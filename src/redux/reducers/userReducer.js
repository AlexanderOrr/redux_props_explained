import { LOGIN, LOGOUT } from '../actions/types'

const initial_state = {
    user: null
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: {
                    username: action.payload.username,
                    password: action.payload.password
                }
            }
        case LOGOUT:
            return {
                user: null
            }
        default: 
            return initial_state
    }
}