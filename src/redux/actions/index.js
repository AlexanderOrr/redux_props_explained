import { LOGIN, LOGOUT, ADD_TO_DO } from './types'

export const login = (data) => {
    return {
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
        payload: null
    }
}

export const addToDo = (data) => {
    return {
        type: ADD_TO_DO,
        payload: data
    }
}