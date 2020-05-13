import React from 'react'
import Login from './Login'
import ToDos from './ToDos'
import { Switch, Route } from 'react-router-dom'
import '../App.css'

let App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/todos' component={ToDos} />
            </Switch>
        </div>
    )
}

export default App