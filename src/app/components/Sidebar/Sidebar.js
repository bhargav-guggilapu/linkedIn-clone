import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItems = ["react-js", "programmer", "frontend", "dev"];

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq"
          alt="bg"
          className="bg_img"
        />
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFMg0DvFRzJgw/profile-displayphoto-shrink_100_100/0/1662190747126?e=1672876800&v=beta&t=apITnbfFrdKLR7HQTZWKRmwfzgHAPSXivfreULlEXOg"
          alt="my_img"
          className="user_img"
        />
        <h2>Bhargav Guggilapu</h2>
        <h4>bhargavguggilapu@gmail.com</h4>
      </div>
      <div className="sidebar_container">
        <div className="bg-color" style={{ width: "100%", textAlign: "left" }}>
          <div className="connections">
            <p>Connections</p>
            <p className="count">9</p>
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
          <p className="count">2,000</p>
        </div>
        <div className="sta">
          <p>Who viewed you</p>
          <p className="count">2,000</p>
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
