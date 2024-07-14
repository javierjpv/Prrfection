import React from "react";
import { FaUser } from "react-icons/fa";
export const CommentItem = ({ comment }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{comment.id}</h5>
          <div className="d-flex flex-column">
          <div className="d-flex mb-2 mt-2">
            <FaUser className=""/>
            <h6 className="card-subtitle mb-2 text-muted"> {comment.user}</h6>
          </div >
          <p className="card-text mb-5 mt-2">{comment.content}</p>
          </div>

          <p>{comment.date}</p>
        </div>
      </div>
    </>
  );
};
