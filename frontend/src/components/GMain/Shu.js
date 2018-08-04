'use strict'
import React from 'react'

/**
 * For show user and edit user
 */
const Shu = (props) => {
    let block = logscan(props.name)
    if (!block) return <div>No user registered in that name</div>
    return <div>
        <div>User Data For {props.name}</div>
        <div>Name:{block.username}</div>
        <div>Password:{block.password}</div>
    </div>
}

export default Shu
