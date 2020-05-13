import { ADD_TO_DO } from '../actions/types'

const initial_state = {
    toDos: ['learn redux', 'break app into components', 'learn props']
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            let appendedToDos = initial_state.toDos
            appendedToDos.push(action.payload)

            return {
                toDos: appendedToDos
            }
        default: 
            return initial_state
    }
}