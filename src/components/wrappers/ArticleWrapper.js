import React from "react";
import Loader from "react-loader-spinner";
import Article from "../Article";
import LoaderContainer from "../../styles/containers/LoaderContainer";

const ArticleWrapper = ({ article }) => {
  if (article === null) {
    return (
      <div>
        <span>
          <strong>Loading your article...</strong>
        </span>
        <LoaderContainer>
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={"10%"}
            width={"10%"}
          />
        </LoaderContainer>
      </div>
    );
  } else {
    return <Article author={article.author} date={date} text={article.text} />;
  }
};

export default ArticleWrapper;
