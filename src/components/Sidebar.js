import React from 'react';
import {Link} from 'react-router-dom';
import "../Resources/Sidebar.css"

const Sidebar = () => {
    return (
        <>
            <div class="wrapper d-flex">
                <div class="sidebar">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                    </ul> 
                </div>
            </div>
        </>
    )
};
export default Sidebar;

