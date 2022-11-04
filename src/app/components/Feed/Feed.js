import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db, collection, getDocs, addDoc } from "../../../firebase";

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

  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const postsCol = collection(db, "posts");
      const snapshot = await getDocs(postsCol);
      const posts = snapshot.docs.map((doc) => doc.data());
      setPosts(posts.sort((b, a) => a.id - b.id));
    })();
  });

  const onSendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: "Test",
      description: "testing data ...",
      message: message,
      photoUrl:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFMg0DvFRzJgw/profile-displayphoto-shrink_100_100/0/1662190747126?e=1672876800&v=beta&t=apITnbfFrdKLR7HQTZWKRmwfzgHAPSXivfreULlEXOg",
      id: Date.now(),
    });

    setMessage("");
  };

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
              <input
                type="text"
                placeholder="Start a post"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={onSendPost} type="submit">
                Send
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
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
