import React from 'react'
import withTitle from './withTitle'



const myTitleUsingHoc = ({title, technology}) => {
    return (
        <div>
            <span>Title: {title}</span> 
            <span>Techonology: {technology}</span>
        </div>
    )
}

export default withTitle(myTitleUsingHoc)

