import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserList from './UserInfo';
import AddUser from './AddUser';

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

  componentDidMount () {
    document.title = 'React App';
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
