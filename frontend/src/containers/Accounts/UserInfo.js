import React from 'react';

const UserInfo = ({user}) => {
    if (!user) return null;
    return (
    <div id="userInfo">
      <h2>User Info</h2>
      <p>
        <strong>Name:</strong><span id='userInfoName' /><br />
        <strong>Age:</strong><span id='userInfoAge' /><br />
        <strong>Gender:</strong><span id='userInfoGender' /><br />
        <strong>Location:</strong><span id='userInfoLocation' /><br />
      </p>
    </div>
    )
};

export default UserInfo;
