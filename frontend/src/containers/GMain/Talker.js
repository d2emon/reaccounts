'use strict';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
    ListGroup,
    ListGroupItem
} from  'reactstrap';

function EnterGame (props) {
    /*
    execl(
        EXE,
        '   --{----- ABERMUD -----}--      Playing as ',
        props.username,
        0
    )
    */
    return <Card>
        <CardHeader>
            <CardTitle>The Hallway</CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>
                You stand in a long dark hallway, which echoes to the tread of your
                booted feet. You stride on down the hall, choose your masque and enter the
                worlds beyond the known......
            </CardText>
        </CardBody>
    </Card>
}

class Talker extends Component {
    constructor (props) {
        super(props);

        this.state = {
            wizard: (props.user_id !== "wisner"),
            enter: false
        };

        /*
        if (props.qnmrq) {
            if (!execl([
                EXE,
                '   --}----- ABERMUD -----{--    Playing as ',
                props.username,
                0
            ])) throw Error('mud.exe : Not found')
        }
        */

        this.enterGame = this.enterGame.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.runTestGame = this.runTestGame.bind(this);
        this.showPerson = this.showPerson.bind(this);
        this.editPerson = this.editPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    enterGame (e) {
        e.preventDefault()
        this.setState({enter: true})
    }

    changePassword (e) {
        e.preventDefault()
        // chpwd(nam)
    }

    runTestGame (e) {
        e.preventDefault()
        if (!this.state.wizard) return
        this.setState({enter: true})
        // return <h1>Entering Test Version</h1>
    }

    showPerson (e) {
        e.preventDefault()
        if (!this.state.wizard) return
        // showuser();
    }

    editPerson (e) {
        e.preventDefault()
        if (!this.state.wizard) return
        // edituser();
    }

    deletePerson (e) {
        e.preventDefault()
        if (!this.state.wizard) return
        // deluser();
    }

    render () {
        return <Card>
            <CardHeader>
                <CardTitle>Welcome To AberMUD II [Unix]</CardTitle>
            </CardHeader>
            <CardBody>
                <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={this.enterGame}>1]  Enter The Game</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.changePassword}>2]  Change Password</ListGroupItem>
                </ListGroup>
                <hr />
                { this.state.wizard && <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={this.runTestGame}>4] Run TEST game</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.showPerson}>A] Show persona</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.editPerson}>B] Edit persona</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.deletePerson}>C] Delete persona</ListGroupItem>
                </ListGroup> }
                { this.state.enter && <EnterGame username={this.props.username} /> }
            </CardBody>
        </Card>
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Talker);
