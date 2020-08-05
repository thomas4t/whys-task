import React from "react";
import Comment from "../Comment";
import Button from "../Button";
import CustomLoader from "../CustomLoader";

const CommentsWrapper = ({
  comments,
  extraComments,
  loadExtraComments,
  loadingExtraComments,
}) => {
  if (comments === null) {
    return <CustomLoader message="Loading comments..." />;
  } else {
    return (
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}

        {/* Conditionally rendering more comments */}
        {loadingExtraComments ? (
          <CustomLoader message="Loading extra comments..." />
        ) : extraComments === null ? (
          <Button text="Load more" onClick={loadExtraComments} />
        ) : (
          extraComments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))
        )}
      </div>
    );
  }
};

export default CommentsWrapper;
