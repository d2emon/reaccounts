import React, { Component } from 'react';

class UserList extends Component {
  constructor () {
    super();
    this.populate();
    this.state = {
      accounts: [
        {
           _id: 1,
           email: 'EMAIL',
           user_id: 'USER_ID'
        }
      ]
    };
  }

  populate () {
    /*
    // jQuery AJAX call for JSON
    $.getJSON( '/users/list', function ( data ) {
      userListData = data;
    });
    */
  }

  showUser () {
    return (event) => {
      event.preventDefault();

      alert(event);
      /*
        // Retrieve username from link rel attribute
        var thisUserName = $(this).attr('rel');

        // Get Index of object based on id value
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
  }

  deleteUser () {
    return (event) => {
      event.preventDefault();

      // Pop up a confirmation dialog
      // var confirmation = confirm('Are you sure you want to delete this user?');
      alert('Are you sure you want to delete this user?');
      /*

        // Check and make sure the user confirmed
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
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map((account, i) => {
              return (
                <tr key={i}>
                  <td><a href="#" className="linkshowuser" rel={account._id} onClick={this.showUser()}>{account.user_id}</a></td>
                  <td>{account.email}</td>
                  <td><button rel={account._id} onClick={this.deleteUser()}>delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
};

export default UserList;
