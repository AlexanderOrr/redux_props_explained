import { ADD_TO_DO } from '../actions/types'

const initial_state = {
    //here I'm being a jokester and adding 3 defaults to do your to do list.  When you land on the ToDos.js component, it reaches out to Redux state, gets this array and tags it onto
    //this.props.ToDoList, and maps it out to show 3 automatic ToDos on the screen.
    toDos: ['learn redux', 'break app into components', 'learn props']
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            //here I am assigning the contents of initial_state to a variable and then manipulating that variable instead of directly doing work to state.  This is convention so you
            //don't screw anything up along the way, for the same reasons we use this.setState instead of modifying state directly.
            //Once I've pushed the new todo to the array of existing todos, I update the redux state with the modified list of to-dos, effectively replacing what's already here with a fresh, extended copy.
            let appendedToDos = initial_state.toDos
            appendedToDos.push(action.payload)

            return {
                toDos: appendedToDos
            }
        //remember, all switch statements require a 'default' case where you just return the state that is already there.
        default: 
            return initial_state
    }
}