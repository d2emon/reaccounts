import React, { Component } from 'react';

/*
// Fill table with data
*/

class UserInfo extends Component {
  render () {
    return (
    <div id="userInfo">
      <h2>User Info</h2>
      <p>
        <strong>Name:</strong><span id='userInfoName'></span><br />
        <strong>Age:</strong><span id='userInfoAge'></span><br />
        <strong>Gender:</strong><span id='userInfoGender'></span><br />
        <strong>Location:</strong><span id='userInfoLocation'></span><br />
      </p>
    </div>
    )
  }
};

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
  /*
  <thead>
    <th>UserName</th>
    <th>Email</th>
    <th>Delete?</th>
  </thead>
  */

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

class AddUser extends Component {
  addUser () {
    return () => {
      alert('New user');
      /*
      function addUser(event) {
        event.preventDefault();

        // Super basic validation - increase errorCount variable if any fields are blank
        var errorCount = 0;
        $('#addUser input').each(function(index, val) {
          if($(this).val() === '') { errorCount++; }
        });

        // Check and make sure errorCount's still at zero
        if(errorCount === 0) {
          // If it is, compile all user info into one object
          var newUser = {
            'user_id': $('#addUser fieldset input#inputUserName').val(),
            'email': $('#addUser fieldset input#inputUserEmail').val(),
            'fullname': $('#addUser fieldset input#inputUserFullname').val(),
            'age': $('#addUser fieldset input#inputUserAge').val(),
            'location': $('#addUser fieldset input#inputUserLocation').val(),
            'gender': $('#addUser fieldset input#inputUserGender').val()
          }

          // Use AJAX to post the object to our adduser service
          $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/add',
            dataType: 'JSON'
          }).done(function( response ) {
            // Check for successful (blank) response
            if (response.msg === '') {
              // Clear the form inputs
              $('#addUser fieldset input').val('');
              // Update the table
              populateTable();
            }
            else {
              // If something goes wrong, alert the error message that our service returned
              alert('Error: ' + response.msg);
            }
          });
        }
        else {
          // If errorCount is more than 0, error out
          alert('Please fill in all fields');
          return false;
        }
      };
      */
    }
  }

  render () {
    return (
    <div>
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
          <button id="btnAddUser" onClick={this.addUser()}>Add User</button>
        </fieldset>
      </div>
    </div>
    )
  }
};

class Accounts extends Component {
  constructor () {
    super();
    let names = [
      "Kitty",
      "Bunny",
      "Author",
      "World"
    ];
    this.state = {
      name: names[0],
      names: names,
      nameId: 0
    };
    this.ClickHandler = this.clickHandler.bind(this);
  }

  clickHandler () {
    return () => {
      let nameId = this.state.nameId + 1;
      if (nameId >= this.state.names.length) {
        nameId = 0
      }
      this.setState({
        nameId: nameId,
        name: this.state.names[nameId]
      });
    }
  }

  render () {
    return (
    <div>
      <UserInfo />
      <UserList />
      <AddUser />
    </div>
    )
  }
};

export default Accounts;
