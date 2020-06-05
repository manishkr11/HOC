import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              counter: 0
         }
     }

     handleClick = () => {
         
     }
     
    render() {
        return (
            <div>
                <h3>count: {this.state.counter}</h3>
                <button onClick={this.handleClick}>incrment</button>
            </div>
        )
    }
}

export default Counter
