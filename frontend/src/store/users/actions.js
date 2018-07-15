import * as types from './actionTypes';
import reaccountsService from '../../services/reaccounts';

export function fetchUsers() {
    return (dispatch, getState) => {
        return reaccountsService.getAccounts().then(response => {
            dispatch({ type: types.USERS_FETCHED, accounts: response });
	}).catch(error => {
            console.error(error);
	});
    };
}

export function showUser(payload) {
    return (dispatch, getState) => {
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
    return (dispatch, getState) => {

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
