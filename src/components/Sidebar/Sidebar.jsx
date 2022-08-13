import React from 'react'

// Css
import './Sidebar.css'
// Icon
import ListRoundedIcon from '@mui/icons-material/ListRounded';


const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="sidebar-item image">
            <img src="https://icsco.ai/wp-content/uploads/2022/06/logo-no-textbg-svg.svg" alt="" />
        </div>
        <div className="sidebar-item place">
            <ListRoundedIcon 
            htmlColor='white' 
            sx={{bgcolor: '#0F1E56', 
            width: '2rem',
            height: '2rem',
            borderRadius: '10px'}}/>
            <span>Place</span>
        </div> 
    </div>
  )
}

export default Sidebar