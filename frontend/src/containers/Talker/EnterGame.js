'use strict'
import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText
} from  'reactstrap'

import Execl from './Execl'

export default function EnterGame (props) {
    return <Card>
        <CardHeader>
            <CardTitle>The Hallway</CardTitle>
        </CardHeader>
        <CardBody>
            <Execl file="EXE" text="   --{----- ABERMUD -----}--      Playing as " user={ props.username } />
            <CardText>
                You stand in a long dark hallway, which echoes to the tread of your
                booted feet. You stride on down the hall, choose your masque and enter the
                worlds beyond the known......
            </CardText>
        </CardBody>
    </Card>
}
