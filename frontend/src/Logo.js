import React from 'react';
// import Logo from './svg/logo.svg';

export default (props) => {
    const src = "//localhost:3000/images/logo.svg"
    const style = {
        width: `${props.width}px`,
        height: `${props.height}px`,
    }
    console.log(props, style);
    return (
        <img src={src} className="App-logo" alt="logo" style={style} />
    )
};
