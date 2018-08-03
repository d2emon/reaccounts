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
const Motd = ({motd, ...props}) => { return <div {...props}>{motd}</div> }

export default Motd;
