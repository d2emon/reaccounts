import React, {Fragment} from 'react';
import {CreatedTime, ElapsedTime} from "../containers/GMain2Time";


const LogoScreen = ({children, ...props}) => <Fragment>
    <h1>A B E R  M U D</h1>
    <h2>By Alan Cox, Richard Acott Jim Finnis</h2>
    {children}
</Fragment>;

export default LogoScreen;
