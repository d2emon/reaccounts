import React from 'react';
// import Logo from './svg/logo.svg';

const src = "//localhost:3000/images/logo.svg"

const Logo = (props) => {
    return (
        <img
            src={src}
	          alt="logo"
	          className="App-logo"
	          {...props}
	      />
    )
};

export default Logo;
