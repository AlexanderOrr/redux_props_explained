//here we are importing hard coded strings from the Types file and are assigned to a variable of the equivelant name.  TBH it's extra coding when you could just type the snake case string,
//but the people I learned from were adament about doing it this was for typo/error reduction.  I guess because a lot of IDE aka code editors will auto complete variables but not strings
import { LOGIN, LOGOUT, ADD_TO_DO } from './types'


//here data is the { email: '', password: '' } object we passed in when calling this.props.login on the Login component screen
export const login = (data) => {
    return {
        //each Redux action object must have a type key and payload key.  The payload can be an object, array, or whatever you want it to be.  These 'actions' are basically just tellers passing, say, 
        //cash into the vault, but a reducer is adding your $20 bills to a stack of other $20 bills, and your $100 bills to a stack of $100 bills.  Reducers are the final, structured data.  Actions 
        //are merely a stop on the way to getting the data housed in a specific manner.
        type: LOGIN,
        payload: {
            username: data.username,
            password: data.password
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        //here we passed a payload of null since we can just clear the login data from inside the reducer. You don't really need a payload key here, but I added it for uniformity's sake.
        payload: null
    }
}

export const addToDo = (data) => {
    return {
        type: ADD_TO_DO,
        payload: data
    }
}