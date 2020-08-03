import React from "react";

const Comment = ({ comment }) => {
  const d = new Date(comment.date);
  const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString();
  return (
    <div>
      <p>
        {date} @ {time} <strong>{comment.author}</strong> says:
      </p>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
