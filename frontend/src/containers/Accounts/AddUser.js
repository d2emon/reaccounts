import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as usersActions from '../../store/account/actions';

class AddUser extends Component {
    onAddUser (payload, event) {
        console.log(payload, event);
        this.props.dispatch(usersActions.addUser(payload));
    }

    render() {
        return (
            <div>
                { /* <UsersTable
                className="UsersList"
                title="Users"
		cols={[
		    "User",
                    "Email",
                    "Money",
                    "Data",
                    "Delete"
		]}
		users={this.props.users}
		renderRow={this.renderRow()}
	        /> */ }
                <h2>User Info</h2>
                <div id="addUser">
                    <fieldset>
                        <input id="inputUserName" type="text" placeholder="Username" />
                        <input id="inputUserEmail" type="text" placeholder="Email" />
                        <br />
                        <input id="inputUserFullName" type="text" placeholder="Full Name" />
                        <input id="inputUserAge" type="text" placeholder="Age" />
                        <br />
                        <input id="inputUserLocation" type="text" placeholder="Location" />
                        <input id="inputUserGender" type="text" placeholder="Gender" />
                        <br />
                        <button id="btnAddUser" onClick={this.onAddUser.bind(this)}>Add User</button>
                    </fieldset>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(AddUser);
