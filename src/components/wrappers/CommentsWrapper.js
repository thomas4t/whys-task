import React from "react";
import Comment from "../Comment";
import Loader from "react-loader-spinner";
import Button from "../Button";
import LoaderContainer from "../../styles/containers/LoaderContainer";

const CommentsWrapper = ({
  comments,
  loadMoreComments,
  loadingMoreComments,
  extraCommentsLoaded,
}) => {
  if (comments === null) {
    return (
      <>
        <span>
          <strong>Loading comments...</strong>
        </span>
        <LoaderContainer>
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={"10%"}
            width={"10%"}
          />
        </LoaderContainer>
      </>
    );
  } else {
    return (
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        {loadingMoreComments ? (
          <>
            <span>
              <strong>Loading extra comments...</strong>
            </span>
            <LoaderContainer>
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={"10%"}
                width={"10%"}
              />
            </LoaderContainer>
          </>
        ) : null}
        {extraCommentsLoaded ? null : (
          <Button text="Load more" onClick={loadMoreComments} />
        )}
      </div>
    );
  }
};

export default CommentsWrapper;
