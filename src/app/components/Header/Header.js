import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../Store/userSlice";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import AppsIcon from "@material-ui/icons/Apps";
import { useHistory } from "react-router-dom";
import ImageRender from "../ImageRender/ImageRender";

function Header() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const navItems = [
    {
      name: "Home",
      Icon: HomeIcon,
    },
    {
      name: "My Network",
      Icon: SupervisorAccountIcon,
    },
    {
      name: "Jobs",
      Icon: BusinessCenterIcon,
    },
    {
      name: "Messaging",
      Icon: ChatIcon,
    },
    {
      name: "Notifications",
      Icon: NotificationsIcon,
    },
    {
      name: "Me",
      Icon: null,
    },
    {},
    {
      name: "Work",
      Icon: AppsIcon,
    },
  ];

  const onLogout = () => {
    history.push("/linkin/login");
  };

  return (
    <div className="header">
      <div className="left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="logo"
        />
        <div className="search">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        {navItems.map((item, i) => {
          return (
            <div key={i}>
              {i === 6 ? (
                <div
                  style={{
                    borderRight: "0.5px solid lightgrey",
                    height: "100%",
                    marginRight: "20px",
                  }}
                />
              ) : (
                <div
                  className="header_options"
                  onClick={() => {
                    if (!item.Icon) onLogout();
                  }}
                >
                  {item.Icon ? (
                    <item.Icon style={{ fontSize: "30px" }} />
                  ) : (
                    <ImageRender user={user} height="30px" fontSize="15px" />
                  )}
                  {item.Icon && <h3>{item.name}</h3>}
                </div>
              )}
            </div>
          );
        })}
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          Try Premium For Free
        </a>
      </div>
    </div>
  );
}

export default Header;
