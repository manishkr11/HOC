import React from 'react'
import withTitle from './withTitle'



const myTitleUsingHoc = ({title}) => {
    return (
        <div>
            Title: {title}
        </div>
    )
}

export default withTitle(myTitleUsingHoc)

