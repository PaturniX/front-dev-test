import React, {useState} from 'react'

// Css
import './Navbar.css'

// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Profile Image
import Profile from '../../img/profile.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false)

        const handleScroll = () =>{
            if(window.scrollY>1){
                setSticky(true)
            }else{
                setSticky(false)
                console.log(window.scrollY);
            }
        }
        
    window.addEventListener("scroll", handleScroll)

    return (
        <div className={sticky ? 'Navbar fixed' : 'Navbar'}>
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