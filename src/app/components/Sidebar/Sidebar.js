import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../Store/userSlice";
import ImageRender from "../ImageRender/ImageRender";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = ["react-js", "programmer", "frontend", "dev"];

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
          alt="bg"
          className="bg_img"
        />
        <ImageRender user={user} height="70px" fontSize="30px" />
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_container">
        <div className="bg-color" style={{ width: "100%", textAlign: "left" }}>
          <div className="connections">
            <p>Connections</p>
            <p className="count">{user.connections}</p>
          </div>
          <p
            style={{
              fontWeight: "bolder",
              padding: "0 10px 5px 10px",
              fontSize: "13px",
            }}
          >
            Grow your network
          </p>
        </div>
      </div>
      <div className="status">
        <div className="sta">
          <p>Who viewed you</p>
          <p className="count">{user.profileView}</p>
        </div>
        <div className="sta">
          <p>Views on post</p>
          <p className="count">{user.postView}</p>
        </div>
      </div>
      <div className="bottom">
        <p>Recent</p>
        {recentItems.map((item, i) => {
          return (
            <div className="item" key={i}>
              <span className="hash">#</span>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
