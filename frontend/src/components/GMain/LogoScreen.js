'use strict';
import React, {Fragment} from 'react';
import Logo from '../Logo';


const LogoScreen = ({ children }) => <Fragment>
    <h1><Logo /></h1>
    <h1>A B E R  M U D</h1>
    <h2>By Alan Cox, Richard Acott Jim Finnis</h2>
    {children}
</Fragment>;

export default LogoScreen;
