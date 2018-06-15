import React, { Component } from 'react';

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

export default UserInfo;
