import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserList from './UserList';
import AddUser from './AddUser';

const Accounts = () => {
    return (
    <div>
      <UserInfo />
      <UserList />
      <AddUser />
    </div>
    )
};

export default Accounts;
