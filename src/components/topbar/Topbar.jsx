import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import BannerImg from "../../assets/yes.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <a href="/" className="logo">
            <img
              src={BannerImg}
              style={{ width: "40px", paddingTop: "5px" }}
              alt="."
            />
            Research Buddy
          </a>
        </div>
        <div className="topRight">
          <div
            className="input-group rounded"
            style={{ marginTop: "-0.3em", marginRight: "2em", width: "20em" }}
          >
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search here..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              type="submit"
              style={{ backgroundColor: "#008dc9", color: "#fff" }}
              className="input-group-text border-0"
              id="search-addon"
            >
              Search
              {/* <Search/> */}
            </button>
          </div>

          <div className="topbarIconContainer">
            <NotificationsNone style={{ fontSize: "38px" }} />
            <span className="topIconBadge">2</span>
          </div>

          <img
            src="https://images.vogue.it/users/my/avatar.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
