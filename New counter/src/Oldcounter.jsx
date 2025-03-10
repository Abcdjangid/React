import React from 'react'

class Oldcounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <>
                <h1>Counter App (Class Based)</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}

export default Oldcounter
