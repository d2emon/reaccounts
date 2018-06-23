import React, { Component } from 'react';

import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
});

class UsersTable extends Component {
  showUser (payload, event) {
    // event.preventDefault();

    // Retrieve username from link rel attribute
    console.log(event);
    const user = payload.user;
    console.log(user);
    alert(user._id);

    // Get Index of object based on id value
    /*
    var arrayPosition = userListData.map(function (arrayItem) {
      return arrayItem.user_id;
    }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    console.log(thisUserName, arrayPosition, userListData, thisUserObject);
    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.user_id);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);
    */
  }

  delUser (payload, event) {
    event.preventDefault();

    // Pop up a confirmation dialog
    // var confirmation = confirm('Are you sure you want to delete this user?');
    alert('Are you sure you want to delete this user?');
    console.log(event);
    console.log(event.target, event.target.ref, event.target.user_id);
    const user = payload.user;
    console.log(user);
    alert(user._id);

    // Check and make sure the user confirmed
    /*
    if (confirmation === true) {
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/users/delete/' + $(this).attr('rel')
      }).done(function( response ) {
        // Check for a successful (blank) response
        if (response.msg === '') {
        }
        else {
          alert('Error: ' + response.msg);
        }

        // Update the table
        populateTable();
      });
    }
    else {
      // If they said no to the confirm, do nothing
      return false;
    }
    */
  }

  render () {
    const users = this.props.users;
    console.log(users);

    if (users.length <= 0) {
      return (<h1>No users!</h1>);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>
		  <a
		    rel={user._id}
		    onClick={this.showUser.bind(this, {user: user})}
		  >
		    {user.user_id}
		  </a>
		</td>
                <td>{user.email}</td>
                <td>
		  <button
		    rel={user._id}
		    onClick={this.delUser.bind(this, {user: user})}
		  >
		    delete
		  </button>
		</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

class UserList extends Component {
  constructor () {
    super();
    this.state = {
      accounts: []
    };
  }

  componentDidMount () {
    this.populate();
  }

  populate () {
    // jQuery AJAX call for JSON
    Axios.get('/users/list')
    .then((response) => {
      this.setState({
	accounts: response.data
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // Username link click
  // $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

  // Delete User link click
  // $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

  render () {
    return (
    <div>
      <h2>User List</h2>
      <div id="userList">
	<UsersTable users={this.state.accounts} />
      </div>
    </div>
    )
  }
};

export default UserList;
