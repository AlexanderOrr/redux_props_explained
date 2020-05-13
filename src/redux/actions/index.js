import { LOGOUT } from './types'

export const login = (data) => {
    return {
        type: login,
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