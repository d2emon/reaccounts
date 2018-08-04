'use strict'
import React from 'react'

export default function Execl (props) {
    return <h3>
        <span style={{ color: 'red' }}>{ props.file }</span>
        <span style={{ color: 'green' }}>{ props.text }</span>
        <span style={{ color: 'blue' }}>{ props.user }</span>
    </h3>
}
