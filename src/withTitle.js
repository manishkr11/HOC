import React from 'react'

const withTitle = (WrappedComponent) => {

    class myComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 title: 'React Js',
                 technology: 'Frontend'
            }
        }
        

        render(){
            return(
                <WrappedComponent title={this.state.title}/>
            )
        }
    }
    return myComponent
}

export default withTitle