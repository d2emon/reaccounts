'use strict';
import React from 'react';

import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';

/**
 * List the message of the day
 */
const Motd = ({motd, ...props}) => {
    return <Card>
        <CardBody>
            <CardText {...props}>{motd}</CardText>
        </CardBody>
    </Card>
};

export default Motd;
