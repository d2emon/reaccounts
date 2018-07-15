import React, { Component } from 'react';

import Aside from '../components/Sidebar';

class Sidebar extends Component {
    render () {
        const items = [
	    { title: "Dashboard" },
	    { title: "User Profile" },
	    { title: "Table List" },
	    { title: "Typography" },
	    { title: "Icons" },
	    { title: "Maps" },
	    { title: "Notifications" }
	];
        console.log(this, this.props);
        return (
            <Aside items={items} />
        )
    }
};

export default Sidebar;
