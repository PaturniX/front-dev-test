import React from 'react'

// Css
import './Navbar.css'

// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Profile Image
import Profile from '../../img/profile.png'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navProfile">
            <NotificationsIcon htmlColor='white' />
            <div className="profile image">
                <img src={Profile} alt="" />
            </div>
            <div className="profile name">
                <h4>Panuwat</h4>
            </div>
            <KeyboardArrowDownIcon htmlColor='white'/>
            </div>
        </div>
    )
}

export default Navbar