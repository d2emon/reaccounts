import React, { Component, Fragment } from 'react';
import { DropdownItem } from 'reactstrap';

import FaSliders from 'react-icons/lib/fa/sliders';
import FaBell from 'react-icons/lib/fa/bell';
import FaCog from 'react-icons/lib/fa/cog';

import MainMenu from '../components/MainMenu';

class MainNavbar extends Component {
    constructor (props) {
        super(props);

        let notifications_count = Math.floor(Math.random() * 10)
        let notifications = [];
        for(let i = 0; i < notifications_count; i++){
            notifications.push({
                id: i + 1,
                title: `Notification ${i + 1}`,
                item: <DropdownItem key={i}>Notification {i + 1}</DropdownItem>
            });
        }
        this.state = {
            notifications: notifications
        }
    }

    render () {
        let menu = [
            { item: <Fragment><FaSliders /> <p>Stats</p></Fragment> },
            { item: (
                <Fragment>
                    <FaBell /> <span className="notification">{this.state.notifications.length}</span> Notifications
		</Fragment>
            ), submenu: this.state.notifications },
            { item: <Fragment><FaCog /> <p>Settings</p></Fragment> }
	]
        return (
            <MainMenu items={menu} />
        )
    }
};

export default MainNavbar;

