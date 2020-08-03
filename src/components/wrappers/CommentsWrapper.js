import React from "react";
import Comment from "../Comment";
import Loader from "react-loader-spinner";

const CommentsWrapper = ({ comments }) => {
  if (comments === null) {
    return (
      <>
        <p>Loading comments...</p>
        <Loader type="TailSpin" color="#00BFFF" height={"10%"} width={"10%"} />
      </>
    );
  } else {
    return (
      <>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </>
    );
  }
};

export default CommentsWrapper;
