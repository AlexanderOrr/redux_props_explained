import React from 'react'
import Login from './Login'
import ToDos from './ToDos'

//more library specific stuff.  Make sure you 'npm react-router-dom' whenever building your own project, and read the documentation for specific instructions
import { Switch, Route } from 'react-router-dom'
//you can host all your CSS inside one file and import it at parent level of the app.  I haven't actually added any CSS to this project, but if you wanted to, you could just start adding it to
//that file and implementing the classNames and ids in the JSX
import '../App.css'

//this is an ES6 Javascript function.  Read up on them if you don't already use them.  They're much prettier and easier to use.  What's written here is the same as function App() { ......code here .......}
let App = () => {
    return (
        <div>
            {/* <Switch> */}
                {/* 'exact' means it is the initial starting route of the app.  In this case we made it the standard '/' endpoint, aka like amazon.com takes you to the homepage. */}
                <Route exact path='/' component={Login} />
                {/* the ToDos component lives at the '/todos' endpoint.  Later, when we navigate from the '/' aka login screen to the ToDos screen, you will see this endpoint in use */}
                <Route path='/todos' component={ToDos} />
            {/* </Switch> */}
        </div>
    )
}

export default App