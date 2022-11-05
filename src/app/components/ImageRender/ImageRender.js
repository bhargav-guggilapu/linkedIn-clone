import React from "react";
import "./ImageRender.css";

function ImageRender({ user, height, fontSize }) {
  return (
    <div>
      {user.photoUrl ? (
        <img
          src={user.photoUrl}
          alt="my_img"
          className="user_img"
          style={{ height: height, width: height }}
        />
      ) : (
        <div
          className="user_img no-img"
          style={{ height: height, width: height, fontSize: fontSize }}
        >
          <span>{user.name[0].toUpperCase()}</span>
        </div>
      )}
    </div>
  );
}

export default ImageRender;
