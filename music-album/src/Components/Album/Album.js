import React from "react";

const Album = (props) => {
  return (
    <>
      <div className="album">
        <img src={props.album_cover} alt="Album-cover" className="album_img" />
        <div className="album_info">
          <p>{props.album_title}</p>
          <span className="album_category">{props.artist}</span>
        </div>
      </div>
    </>
  );
};

export default Album;
