import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ImageRender from "../ImageRender/ImageRender";

const Post = forwardRef(
  ({ name, description, message, photoUrl, timeStamp }, ref) => {
    const buttons = [
      {
        Icon: ThumbUpAltOutlinedIcon,
        title: "Like",
      },
      {
        Icon: MailOutlineIcon,
        title: "Comment",
      },
      {
        Icon: CachedOutlinedIcon,
        title: "Repost",
      },
      {
        Icon: SendOutlinedIcon,
        title: "Send",
      },
    ];
    return (
      <div ref={ref} className="post">
        <div className="post_header">
          <ImageRender
            user={{ name: name, photoUrl: photoUrl }}
            height="50px"
            fontSize="20px"
          />
          <div className="post_info">
            <h2 style={{ fontSize: "15px" }}>{name}</h2>
            <p>{description}</p>
            <p>
              {new Date(timeStamp).toLocaleTimeString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="feed_options">
          {buttons.map((button, index) => (
            <div key={index} className="input_option">
              <button.Icon style={{ color: "gray" }} />
              <h4 style={{ marginLeft: "5px" }}>{button.title}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Post;
