import React from 'react';
import stylesWapper from './../HOC/stylesWapper'
const ButtonOne = (props) => {
    return (
        <button style={props.style}>I am button</button>
    )
}
export default stylesWapper(ButtonOne);