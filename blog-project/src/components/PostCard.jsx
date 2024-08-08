import React from "react";
import service from "../appwrite/conf";
import Link from "react-router-dom";
function PostCard({ $id, title, featureImage, status }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div>
          <div>
            <img
              src={service.getFilePreview(featureImage)}
              alt={featureImage}
            />
          </div>
          <h3>{title}</h3>
          <span>{status}</span>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
