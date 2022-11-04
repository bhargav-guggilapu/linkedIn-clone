import React from "react";
import "./Feed.css";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  const inputOptions = [
    {
      Icon: ImageIcon,
      color: "#70B5F9",
      title: "Photo",
    },
    {
      Icon: SubscriptionsIcon,
      color: "#7FC15E",
      title: "Video",
    },
    {
      Icon: EventNoteIcon,
      color: "#E7A33E",
      title: "Event",
    },
    {
      Icon: CalendarViewDayIcon,
      color: "#E16745",
      title: "Write article",
    },
  ];
  return (
    <div className="feed">
      <div className="input_container">
        <div className="input_content">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFMg0DvFRzJgw/profile-displayphoto-shrink_100_100/0/1662190747126?e=1672876800&v=beta&t=apITnbfFrdKLR7HQTZWKRmwfzgHAPSXivfreULlEXOg"
            alt="my_img"
          />
          <div className="input">
            <form>
              <input type="text" placeholder="Start a post" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="feed_options">
          {inputOptions.map((option, index) => (
            <div key={index} className="input_option">
              <option.Icon style={{ color: option.color }} />
              <h4 style={{marginLeft: '5px'}}>{option.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
