import React from 'react'
import ReactDOM from 'react-dom'

//it is convention that all React components go inside a 'components' folder.  Note that this must reside within the 'src' folder for React to work. You will get an error if you place it alongside/outside the 'src' folder
import App from './components/App'

//you'll need to 'npm install react-redux' as well as 'npm install react-router-dom' since these are external packages.  Read their documentation to fill in any questions.
//note that anything imported within { <import here> } is a mere function inside the library and not a default export.  Basically, you're grabbing just a portion of the library instead of it all
//note that anything installed with NPM is technically a 'library'.  React is a library, Redux is a library, Angular is a library, etc etc.  A library is just a formal word for pre-written code that makes your life a heck of a lot easier.
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//store is where the universal state is stored for the component. It is part of the Redux library.  Google "npm redux" for more info.
import { createStore, applyMiddleware } from 'redux'

//it is convention that all Redux stuff goes within a 'redux' folder inside the 'src' folder. Again, if it's at or outside the 'src' folder, React won't like and and will throw an error.
import reducers from './redux/reducers'
import reduxThunk from 'redux-thunk'



//reducers are like individual tellers.  In the case of this app, you hand login information to the 'userReducer' teller, and to-do list information to the 'toDoReducer' teller. More on these files later
//reduxThunk is used for async function inside redux actions.  This app does not make use of any async actions since we're not fetching or axios requesting anything.  But read up on it and note where reduxThunk is implemented here

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        {/* BrowserRouter is just a route handler that allows you to assign different component to different URL endpoints.  Go inside the App.js file to see each parent component 
            getting assigned to it's own end point.  You can have as many of them as you want, they just all have to be uniqe end points since each end point can only
            reference once specific file
        */}
        <BrowserRouter>
            {/* this App is referring to our App.js component.  You could break the content of the App.js file out here and not technically need a separate App.js, but I like
                to compartmentalize (sp?) things as much as possible.  Ideally no react file should be much longer than the height of your screen to cut down on scrolling
             */}
            <App />
        </BrowserRouter>
        {/* As you probably know, this getElementById('root') is just assigning all our Javascript React stuff to a real, hard-coded location in the offical index.html file.  This 'root' 
            html component is the parent to the entire React app
        */}
    </Provider>, document.getElementById('root')
)