// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function () {
  // Populate the user table on initial page load
  populateTable();

  // Username link click
  $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
});

// Functions =============================================================

// Fill table with data
function populateTable() {
  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/users/list', function ( data ) {
    userListData = data;
    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.user_id + '">' + this.user_id + '</a></td>';
      tableContent += '<td>' + this.email + '</td>';
      tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';
    });
    // Inject the whole content string into our existing HTML table
    $('#userList table tbody').html(tableContent);
  });
};

// Show User Info
function showUserInfo(event) {
  // Prevent Link from Firing
  event.preventDefault();

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
}
