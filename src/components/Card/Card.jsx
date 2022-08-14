import React, { useState } from "react";
import SweetPagination from "sweetpagination";

// Import JSON
import Data from "../../Data/example_data.json";

// Css
import "./Card.css";

// Icons
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const Card = () => {
  // Set current page
  const [currentPageData, setCurrentPageData] = useState([]);

  // Function to create a new CardComponent
  const CardComponent = (param) => {
    const Name = param.name;
    const ProfileImg = param.profileImg;
    const Operation_time = param.operation_time;
    const Rating = param.rating;
    const Images = param.images;

    // Get current day to show open and closed time
    const Days = new Date();
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const Day = weekDay[Days.getDay()];
    //   Filter Today to show open and closed time
    const Today = Operation_time.filter((a) => a.day === Day);
    //   const Open = Today.map(({ time_open }) => ({ time_open }));
    //   const Close = Today.map(({ time_close }) => ({ time_close }));
    //   const Operation = Open.concat(Close)

    return (
      <div className="CompactCard">
        <div className="cardProfile">
          <img src={ProfileImg} alt="" />

          <div className="cardInfo">
            <span>{Name}</span>
            <div className="cardOperate_rate">
              <div className="cardOperate">
                <CalendarMonthRoundedIcon htmlColor="#605C5C"/>
                {/* Map data to show open and close time */}
                {Today.map((Today) => (
                  <span>
                    {Today.time_open} - {Today.time_close}
                  </span>
                ))}
              </div>
              <div className="cardRating">
                <FiberManualRecordRoundedIcon fontSize="small"/>
                <span>{Rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cardImage">
          <img src={Images[0]} alt="" />
          <img src={Images[1]} alt="" />
          <img src={Images[2]} alt="" />
        </div>
      </div>
    );
  };

  return (
    <div className="Card">
      <div className="cardContainer">
        {currentPageData.map((data) => {
          console.log(data);
          return (
            <div className="parentContainer">
              <CardComponent
                name={data.name}
                profileImg={data.profile_image_url}
                operation_time={data.operation_time}
                rating={data.rating}
                images={data.images}
              />
            </div>
          );
        })}
      </div>
      {/* Paginater */}
      <div className="Paginater">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={9}
          getData={Data}
          navigation={true}
          getStyle={'style-2'}
        />
      </div>
    </div>
  );
};

export default Card;
