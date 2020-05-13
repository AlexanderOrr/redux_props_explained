import React from 'react'

//if you don't specify props in as variable in this function, props won't work. The specific name 'props' is not required - you could name it 'Trump' or 'Obama', but then it would have to be Trump.content or Obama.content
let ToDoItem = (props) => {
    return (
        <div>
            <li>{props.content}</li>
        </div>
    )
}

export default ToDoItem