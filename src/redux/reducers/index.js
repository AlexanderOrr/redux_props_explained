import { combineReducers } from 'redux'
import userReducer from './userReducer'
import toDoReducer from './toDoReducer'

//it is convention to break content handling out into individual reducers for individual needs, and then combine them into one final root reducer that we access via the mapStateToPros
//function inside the React components.  Hence, you __could__ have your user info and to do info in the same reducer, but it gets cluttered, confusing, and long.  Best to 
//just have a reducer to compartmentalize all your user stuff together, and the same with your to do stuff.  combineReducers, as you can see, comes from the redux library.  Google 'npm redux'
//for their docs and read for specific questions/answers.


export default combineReducers({
    userReducer,
    toDoReducer
})