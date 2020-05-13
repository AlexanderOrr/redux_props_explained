import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem'

//importing multiple custom redux actions from our redux file.  Note that if you have an index.js inside any folder, you do not have to specifically import index.js.  Just reference down to the folder and it defaults to the index.js
import { addToDo, logout } from '../redux/actions'

//we are going to use this Link tag to navigate between end points specified in our App.js file.
import { Link } from 'react-router-dom'
//You don't have to use uniqid, but I like to to add easy unique keys to an item when I use .map or for loops.  Not providing a key will throw an error in the console, although the app will still work.
import uniqid from 'uniqid'

class ToDoList extends React.Component {
    constructor() {
        super()
        this.state = {
            toDo: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addToDo(this.state.toDo)

        //clearing the state and thus the content of the input HTML element back to an empty string/empty input box after submission
        this.setState({
            toDo: ''
        })
    }

    render() {

        //this is the Redux to-do list.  Like the methods, when specified in the last line of this file, it gets tacked onto this.props with whatever object key you give it in the return of mapStateToProps
        let mappedToDos = this.props.toDoList.map(toDo => {
            return (
                <div key={uniqid()}>
                    {/* here we are passing the string To Do we typed earlier down to the ToDoItem component via props.  As you will se inside the ToDoItem file, 
                        we access this sting via 'this.props.content'
                    */}
                    <ToDoItem content={toDo} />
                </div>
            )
        })
        return (
            <div>
                <h3>To Dos</h3>
                <input type='text' name='toDo' placeholder='Add a to-do here' onChange={this.handleChange} value={this.state.toDo} />
                <button onClick={this.handleSubmit}>Add To-Do</button>
                <ol>
                    {/* all static aka non function variables are stored in the render function and before the return.  mappedToDos on line 44 is - at the end of the day - 
                        merely an array of ToDoItem components, and we are referencing that array here.    
                    */}
                    {mappedToDos}
                </ol>

                {/* here the Link tag operates like an <a> HTML anchor/link tag.  You don't have to use a button element here, but I did for easy styling.
                    When you click the Link tag it will take you back to the '/' endpoint, and thus the Login screen since we specified in App.js that Login lives at the
                    'exact' path of '/'
                */}
                <Link to='/' onClick={() => this.props.logout()}>
                    <button>Log Out</button>
                </Link>
                
            </div>
        )
    }
}

//the state we are passing into the arrow function is the entire redux state.  We then pick off only what we want, which is the toDo array inside the toDoReducer, and we assign it to the 
//toDoList object key that keys tacked onto this.props and is referenced in line 44 of this file.
const mapStateToProps = state => {
    return {
        toDoList: state.toDoReducer.toDos
    }
}

//here we specified the above ES6 arrow function of mapStateToProps in the connect function instead of null because we actually need to see what's inside the redux reducer
export default withRouter(connect(mapStateToProps, { addToDo, logout })(ToDoList))