import React from "react";

export default function Card({ obj }) {
  console.log(obj);
  const { author, location, likes, description, image, createdAt } = obj;


 const fallbackImage = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';

  return (
    <div className="card">
      <div className="head">
        <div className="name" style={{ marginTop: "8px" }}>
          <h3>{author}</h3>
          <p style={{ paddingBottom: "7px" }}>{location}</p>
        </div>
        <div className="more">...</div>
      </div>

      <div style={{ width: "100%", height: "60%", minHeight: "40%" }}>
        <img
          src={image}
          alt="no-img"
          className="post-img"
          onError={(event) => {
            event.target.onerror = null; 
            event.target.src = fallbackImage; 
          }}
        />
      </div>

      <div className="foot">
        <div>
          <span>{"\u2661"}</span>
          <span>
            <img
              style={{ width: "20px", height: "20px" }}
              src={'https://cdn-icons-png.flaticon.com/128/2526/2526496.png'}
              alt="shareImg"
            />
          </span>
        </div>
        <div className="date">{createdAt.split("T")[0].split("-").join("/")}</div>
      </div>

      <div className="like-content">
        <p style={{ fontWeight: "bold" }}>{likes} likes</p>
        <p className="content">{description}</p>
      </div>
    </div>
  );
}
