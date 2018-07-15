import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// import './TopicsScreen.css';
import * as usersActions from '../../store/users/actions';
import * as usersSelector from '../../store/users/reducer';

// import ListView from '../components/ListView';

const UsersTable = ({title, cols, users, renderRow, ...props}) =>  {
    if (users.length <= 0) {
        return (<h1>No users!</h1>);
    }

    return (
        <div {...props}>
	    <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        {cols.map((col, id) => <th key={"col-" + id}>{col}</th> )}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => { return renderRow(i, user); })}
                </tbody>
            </table>
        </div>
    )
}

class UserList extends Component {
    componentDidMount() {
        this.props.dispatch(usersActions.fetchUsers());
    }

    onShowUser (payload, event) {
        this.props.dispatch(usersActions.showUser(payload));
    }

    onDelUser (payload, event) {
        event.preventDefault();

        this.props.dispatch(usersActions.delUser(payload));
    }

    render() {
	if (!this.props.users) return this.renderLoading();
        return (
	    <UsersTable
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
	    />
        );
    }

    renderLoading() {
        return (
            <h1>Loading...</h1>
        );
    }

    renderRow() {
        return (id, user) => (
            <tr key={id}>
                <td>
                    <a
                        rel={user._id}
                        onClick={this.onShowUser.bind(this, {user: user})}
                    >
                        {user.user_id}
                    </a>
                </td>
                <td>{user.email}</td>
                <td>{user.money}$</td>
                <td>{JSON.stringify(user.data)}</td>
                <td>
                    <button
	                rel={user._id}
                        onClick={this.onDelUser.bind(this, {user: user})}
                    >
		        delete
                    </button>
                </td>
            </tr>
        );
    }
};

function mapStateToProps(state) {
    return {
        users: usersSelector.getUsers(state)
    };
}

export default connect(mapStateToProps)(UserList);
