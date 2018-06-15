import React, { Component } from 'react';

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

export default AddUser;
