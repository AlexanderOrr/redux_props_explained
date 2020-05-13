import React from 'react'

//again, libraries.  Read their docs for specifcs
import { login } from '../redux/actions'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


//I used Javascript classes since I assumed that's what you have been using, but once you get a grasp of everything React, read up on their new implementation of using exclusively functional 
//components with React.useState() instead of building a constructor each time.  IMO you can go the class route or with the more modern useState() hook, but a lot of companies specifically
//using the hook route.
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        //don't forget to bind any methods interacting with state to the constructor.
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            //this is a way to use one event handler to control multiple different inputs that modify this.state.  'e' is automatically passed as a parameter on onChange and onSubmit prop functions.
            //Here we are taking the 'name' prop of the input component and using it as the the key inside the this.state object, and modifying the this.state[key] value with the value of the
            //HTML input tag.  Not that this will __only__ work if the this.state[key] and HTML input's 'name' prop are identical.
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        //if this input of type 'submit' was inside a form tag, it would need this e.preventDefault() function to keep the page from auto refreshing once you submitted the form.
        //I orignally coded this in a form and then took it out because IMO forms are just an antiquated pain.  I left this in there by accident, but in case you didn't know about 
        //preventing refresh, now you do.
        e.preventDefault()

        //this.props.login is a redux method that we added tacked onto this component's props in the last line of this file.  Any Redux method you add will get tagged onto this.props for the component
        //We are passing this.state's data to the Redux login method.  Inside redux this looks like:
        // {
        //     email: 'whatever you type for email',
        //     password: 'whatever you type for password'
        // }
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

//withRouter is required when you use react-router.  Connect is bringing in your Redux stuff to this component.  Null is referring to component-wide state.  We left it null here
// because we don't need it yet and are only interested in adding to the redux state, not reading it.  Login specifies the specific redux method we wrote and want to use.
// If you want to use multiple Redux methods, just add them to this object.  In the of needing both a login and logout method, this object would look like { login, logout } with each 
// method merely separated by commas.
// Login simply refers to the class or functional component you defined at the top of the file.  Since this is the Login component that we uniformly named Login, we are thus exporting Login here
export default withRouter(connect(null, { login })(Login))