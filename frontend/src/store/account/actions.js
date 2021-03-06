import * as types from './actionTypes';
import reaccountsService from '../../services/reaccounts';


export function fetchUsers() {
    return (dispatch) => {
        return reaccountsService.getAccounts().then(response => {
            dispatch({ type: types.USERS_FETCHED, accounts: response });
        }).catch(error => {
            console.error(error);
        });
    };
}

export function showUser(payload) {
    return () => {
        /*
            return reaccountsService.getAccounts().then(response => {
                dispatch({ type: types.USERS_FETCHED, accounts: response });
        }).catch(error => {
                console.error(error);
        });
        */

        // event.preventDefault();

        // Retrieve username from link rel attribute
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
    };
}

export function delUser(payload) {
    return () => {

        // Pop up a confirmation dialog
        // var confirmation = confirm('Are you sure you want to delete this user?');
        alert('Are you sure you want to delete this user?');
        // console.log(event);
        // console.log(event.target, event.target.ref, event.target.user_id);
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

    };
}

export function addUser() {
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
    };
}