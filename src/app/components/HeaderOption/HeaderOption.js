import React from "react";
import "./HeaderOption.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function HeaderOption({ title, Icon }) {
  return (
    <div className="options">
      {Icon ? (
        <Icon style={{ fontSize: "30px" }} />
      ) : (
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFMg0DvFRzJgw/profile-displayphoto-shrink_100_100/0/1662190747126?e=1672876800&v=beta&t=apITnbfFrdKLR7HQTZWKRmwfzgHAPSXivfreULlEXOg"
          alt="my_img"
        />
      )}
      <h3>
        {title}
        {!Icon && <ArrowDropDownIcon />}
      </h3>
    </div>
  );
}

export default HeaderOption;
