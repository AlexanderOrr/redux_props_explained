import React from 'react'
import { login } from '../redux/actions'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
        this.props.login(this.state)
        this.setState({
            email: '',
            password: ''
        })

    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                    <input type='text' name='email' value={this.state.email} placeholder='email' onChange={this.handleChange} />
                    <input type='password' name='password' value={this.state.password} placeholder='password' onChange={this.handleChange} />

                    <Link to='/todos'>
                        <input type='submit' onSubmit={this.handleSubmit} />
                    </Link>
                    
                
            </div>
        )
    }
}

export default withRouter(connect(null, { login })(Login))