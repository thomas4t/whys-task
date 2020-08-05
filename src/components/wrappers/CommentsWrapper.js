import React from "react";
import Comment from "../Comment";
import Button from "../Button";
import CustomLoader from "../CustomLoader";

const CommentsWrapper = ({
  comments,
  loadMoreComments,
  loadingMoreComments,
  extraCommentsLoaded,
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
        {loadingMoreComments ? (
          <CustomLoader message="Loading extra comments..." />
        ) : null}
        {extraCommentsLoaded ? null : (
          <Button text="Load more" onClick={loadMoreComments} />
        )}
      </div>
    );
  }
};

export default CommentsWrapper;
