import React from "react";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="input_container">
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
    </div>
  );
}

export default Feed;
