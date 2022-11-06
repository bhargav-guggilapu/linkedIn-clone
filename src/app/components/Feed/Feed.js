import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import FlipMove from "react-flip-move";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useSelector } from "react-redux";
import { selectUser } from "../../Store/userSlice";
import ImageRender from "../ImageRender/ImageRender";

function Feed() {
  const user = useSelector(selectUser);

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

  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://linkin-46671-default-rtdb.firebaseio.com/posts.json"
    );
    const data = await response.json();
    const posts = [];
    for (const key in data) {
      posts.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        message: data[key].message,
        photoUrl: data[key].photoUrl,
        timeStamp: data[key].timeStamp,
      });
    }
    setPosts(posts.reverse());
  };

  useEffect(() => {
    getData();
  });

  const onSendPost = async (e) => {
    e.preventDefault();

    await fetch("https://linkin-46671-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify({
        name: user.name,
        description: user.email,
        message: message,
        timeStamp: Date.now(),
        photoUrl: user.photoUrl,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setMessage("");
  };

  return (
    <div className="feed">
      <div className="input_container">
        <div className="input_content">
          <ImageRender user={user} height="50px" fontSize="20px" />
          <div className="input">
            <form>
              <input
                type="text"
                placeholder="Start a post"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={onSendPost} type="submit">
                <AddBoxIcon />
              </button>
            </form>
          </div>
        </div>
        <div className="feed_options">
          {inputOptions.map((option, index) => (
            <div key={index} className="input_option">
              <option.Icon style={{ color: option.color }} />
              <h4 style={{ marginLeft: "5px" }}>{option.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <div>
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              description={post.description}
              message={post.message}
              photoUrl={post.photoUrl}
              timeStamp={post.timeStamp}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
