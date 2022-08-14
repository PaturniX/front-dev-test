import React from "react";

// Css
import "./PlaceList.css";

// Icon
import SearchIcon from "@mui/icons-material/Search";

import Card from "../Card/Card";

const PlaceList = () => {
  return (
    <div className="PlaceList">
      <div className="PlaceList-Container">
        <div className="PlaceList header">
          <h1>Place List</h1>
        </div>
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
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search name..."
            />
            <SearchIcon style={{ paddingRight: "1rem" }} className="SearchIcon"/>
          </div>
        </div>
      </div>
      <div className="PlaceCard">
        <Card />
      </div>
    </div>
  );
};

export default PlaceList;
