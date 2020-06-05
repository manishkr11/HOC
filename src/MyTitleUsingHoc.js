import React from 'react'
import withTitle from './withTitle'



const myTitleUsingHoc = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default withTitle(myTitleUsingHoc)

