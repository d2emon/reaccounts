'use strict'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    ListGroup,
    ListGroupItem
} from  'reactstrap'

import Execl from './Execl'
import EnterGame from './EnterGame'
import ChangePasswordModal from "../../modals/ChangePasswordModal";

import * as modalsActions from '../../store/modals/actions'
import ShowUserModal from "../../modals/ShowUserModal";

class Talker extends Component {
    constructor (props) {
        super(props);

        this.state = {
            qnmrq: true,
            wizard: true, // (props.user_id === "wisner"),
            enter: false
        }
    }

    enterGame (e) {
        e.preventDefault()
        // TODO: Change it to action
        this.setState({enter: true})
    }

    /**
     * Change your password
     * @param e
     */
    changePassword (e) {
        e.preventDefault()
        this.props.dispatch(modalsActions.showChangePasswordModal(true))
    }

    runTestGame (e) {
        e.preventDefault()
        if (!this.state.wizard) return
        this.setState({enter: true})
        // return <h1>Entering Test Version</h1>
    }

    /**
     * Show account
     * @param e
     */
    showPerson (e) {
        e.preventDefault()
        console.log('Show Account')
        if (!this.state.wizard) return
        this.props.dispatch(modalsActions.showShowUserModal(true))
    }

    editPerson (e) {
        e.preventDefault()
        if (!this.state.wizard) return
        this.props.dispatch(modalsActions.showEditUserModal(true))
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
                { this.state.qnmrq &&
                    <Execl file="EXE" text="   --}----- ABERMUD -----{--    Playing as " user={this.props.username} />
                }
                <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={this.enterGame.bind(this)}>1]  Enter The Game</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.changePassword.bind(this)}>2]  Change Password</ListGroupItem>
                </ListGroup>
                <hr />
                { this.state.wizard && <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={this.runTestGame.bind(this)}>4] Run TEST game</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.showPerson.bind(this)}>A] Show persona</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.editPerson.bind(this)}>B] Edit persona</ListGroupItem>
                    <ListGroupItem tag="a" href="#" onClick={this.deletePerson.bind(this)}>C] Delete persona</ListGroupItem>
                </ListGroup> }
                { this.state.enter && <EnterGame username={this.props.username} /> }
                <ChangePasswordModal user={{ username: this.props.username, password: this.props.password }} />
                <ShowUserModal />
            </CardBody>
        </Card>
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Talker);
