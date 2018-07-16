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

export function addUser(payload) {
    return (dispatch, getState) => {
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


export function gethostname (payload) {
    return (dispatch, getState) => {
        console.log("GETHOSTNAME", payload);
    };
}

export function chknolog (payload) {
    return (dispatch, getState) => {
        console.log("CHKNOLOG", payload);
    };
}


const stat = (payload) => {
    console.log("STAT", payload);
    return {}
}

const HOST_MACHINE = "HOST MACHINE";
const EXE = "EXE";
const RESET_N = "RESET_N";

export function testHostname (payload) {
    return (dispatch, getState) => {
        console.log(payload, payload.user, HOST_MACHINE);
        if (payload.user != HOST_MACHINE) {
            throw Error(`AberMUD is only available on ${HOST_MACHINE}, not on ${payload.user}\n`);
        }
    };
}

export function loadStats (payload) {
    return (dispatch, getState) => {
        console.log(payload);

        let space = 0;
	let statbuf = stat(EXE);
        if (!statbuf) {
            space = "<unknown>\n";
        } else {
            space = ctime(statbuf.st_mtime);
        }

        let a = fopen(RESET_N, "r");
    };
}

export function login (payload) {
    return (dispatch, getState) => {
        console.log("LOGIN", payload);
        // long un1;
        // char usermc[80],a[80],tim[80],dat[80],c;
        /*
         *
         * Check if banned first
         *
         */    
        chkbnid(cuserid());
        /*
         * Get the user name
         *
         */
        if (!namegiv) {
            // rena:
            console.log("By what name shall I call you ?\n*");
            getkbd(user,15);
        } else {
            user = namegt;
        }
        /*
         * Check for legality of names
         *
         */       
        namegiv = 0;
        // if (!strlen(user)) goto rena;
        if (any('.',user) > -1) crapup("\nIllegal characters in user name\n");
        trim(user);
        scan(user, user, 0, " ", "");
        // if (!strlen(user)) goto rena;
        chkname(user);
        // if(!strlen(user)) goto rena;
        dat = user;             /* Gets name tidied up */
        usrnam = user;
        if (!validname(usrnam)) crapup("Bye Bye");
        if (logscan(dat,a)== -1) {
            /* If he/she doesnt exist */
            console.log("\nDid I get the name right %s ?", user);
            fgets(a,79,stdin);
            lowercase(a);
            c=a[0];
            if (c=='n')  {
                printf("\n");
		// goto rena;
	    }
	    /* Check name */
       }
       logpass(user);        /* Password checking */
    };
}
