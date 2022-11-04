import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./SidebarRight.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function SidebarRight() {
  const suggestions = [
    {
      heading: "LinkedIn's Top Voices Green in India",
      description: "Top news • 4,144 readers",
    },
    {
      heading: "WFH affecting employee health",
      description: "3d ago • 30,996 readers",
    },
    {
      heading: "Will blocked Twitter users be back?",
      description: "1d ago • 226,323 readers",
    },
    {
      heading: "More NRIs buying homes in India",
      description: "1d ago • 1,794 readers",
    },
    {
      heading: "Games24x7 launches ₹400 crore-fund",
      description: "1d ago • 4,862 readers",
    },
  ];
  return (
    <div className="sidebarRight">
      <div className="sidebarRight_header">
        <h2>LinkIn News</h2>
        <InfoIcon style={{ cursor: "pointer" }} />
      </div>
      {suggestions.map((suggestion, i) => (
        <div className="sidebarRight_article" key={i}>
          <div className="article_left">
            <FiberManualRecordIcon style={{ fontSize: "10px" }} />
          </div>
          <div className="article_right">
            <h4 style={{ fontSize: "14px" }}>{suggestion.heading}</h4>
            <p>{suggestion.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidebarRight;
