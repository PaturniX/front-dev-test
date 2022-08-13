import React from "react";

// Css
import "./PlaceList.css";

// Icon
import SearchIcon from '@mui/icons-material/Search';

const PlaceList = () => {
  return (
    <div className="PlaceList">
      <h1>Place List</h1>
      <div className="searchGroup">
        <div className="searchInput Select">
          <select name="" className="select">
            <option value="">Restaurant</option>
            <option value="">Bakery</option>
            <option value="">Cafe</option>
          </select>
        </div>
        <div className="searchInput verticalLine"></div>
        <div className="searchInput Input">
          <input type="text" name="search" className="search" placeholder="Search name..."/>
          <SearchIcon style={{paddingRight: '1rem'}}/>
        </div>
        
      </div>
    </div>
  );
};

export default PlaceList;
