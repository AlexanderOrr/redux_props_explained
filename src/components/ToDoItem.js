import React from 'react'

//if you don't specify props in as variable in this function, props won't work. The specific name 'props' is not required - you could name it 'Trump' or 'Obama', but then it would have to be Trump.content or Obama.content
class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.renderExtra = this.renderExtra.bind(this)
    }

    handleClick() {
        this.setState({
            isShown: !this.state.isShown
        })
    }

    renderExtra() {
        if (this.state.isShown === true) {
            return (
                <div>
                    <p>hypothetical client content here</p>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        console.log('props are', this.props)
        return (
            <div>
                <li>{this.props.title}</li>
                {this.renderExtra()}
                <button onClick={() => this.props.greeting()}>Say Hi</button>
            </div>
        )
    }
}


export default ToDoItem


// let ToDoItem = (props) => {
//     return (
//         <div>
//             <li>{props.clownshoes.title}</li>
//         </div>
//     )
// }

// export default ToDoItem