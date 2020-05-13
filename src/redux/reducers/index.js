import { combineReducers } from 'redux'
import userReducer from './userReducer'
import toDoReducer from './toDoReducer'

export default combineReducers({
    userReducer,
    toDoReducer
})