import { LOGIN, LOGOUT } from '../actions/types'

const initial_state = {
    user: null
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: {
                    //This is where they payload key comes in use.  Remember we passed the equivelant of 
                    // { 
                    //     username: 'whoever',
                    //     password: 'whatever'
                    // } 
                    //and now we are just reassigning those key/value pairs to the key and value we want inside our Redux state object.
                    username: action.payload.username,
                    password: action.payload.password
                }
            }
        case LOGOUT:
            //we could have specified an action.payload = '', but since we know no user means literally null (or no user), we can just clear the user object out upon logout and set it back to null
            return {
                user: null
            }
        default: 
            return initial_state
    }
}