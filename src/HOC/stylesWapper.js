import React from "react";
import commonStyles from './../styles/commonStyles'

const translateProps= (props)=> {
    let _styles = {...commonStyles.default}
    if(props.disable) {
        _styles = {..._styles , ...commonStyles.disable}
    }
    const newPops = {...props, styles: _styles}
    return newPops;
}

export default (WrappedComponent) => {
        return function wrappedRender(args) {
            return WrappedComponent(translateProps(args))
        }
}