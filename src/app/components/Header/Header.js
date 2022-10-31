import React from "react";
import "./Header.css";
import HeaderOption from "../HeaderOption/HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  const navItems = [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "My Network",
      icon: SupervisorAccountIcon,
    },
    {
      name: "Jobs",
      icon: BusinessCenterIcon,
    },
    {
      name: "Messaging",
      icon: ChatIcon,
    },
    {
      name: "Notifications",
      icon: NotificationsIcon,
    },
    {
      name: "Me",
      icon: null,
    },
    {},
    {
      name: "Work",
      icon: AppsIcon,
    },
  ];
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
            <div>
              {i === 6 ? (
                <div
                  style={{
                    borderRight: "0.5px solid lightgrey",
                    height: "100%",
                    marginRight: "20px",
                  }}
                />
              ) : (
                <HeaderOption title={item.name} Icon={item.icon} />
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
