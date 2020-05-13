import React from 'react'

let ToDoItem = (props) => {
    return (
        <div>
            <li>{props.content}</li>
        </div>
    )
}

export default ToDoItem