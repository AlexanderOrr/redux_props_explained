import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem'
import { addToDo, logout } from '../redux/actions'
import { Link } from 'react-router-dom'
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

        this.setState({
            toDo: ''
        })
    }

    render() {
        let mappedToDos = this.props.toDoList.map(toDo => {
            return (
                <div key={uniqid()}>
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
                    {mappedToDos}
                </ol>

                <Link to='/' onClick={() => this.props.logout()}>
                    <button>Log Out</button>
                </Link>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toDoList: state.toDoReducer.toDos
    }
}

export default withRouter(connect(mapStateToProps, { addToDo, logout })(ToDoList))