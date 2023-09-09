import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import "./mentorshipPage.css";

const Menu = ({ menuItem }) => {
  Menu.propTypes = {
    menuItem: PropTypes.number.isRequired,
  };
  return (
    <div className="item">
      {menuItem.map((item) => (
        <div className="item-con" key={item.id}>
          <div className="item-container">
            <img src={item.image} alt="" className="mentorPicture" />
            <h2 className="mentorTitle">{item.title}</h2>
            <p className="duration">{item.experience}</p>
            <p className="mentorProfile">{item.profile}</p>

            <center>
              <a href="#" className="btn-preview">
                Book Session <FaAngleRight />
              </a>
            </center>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
