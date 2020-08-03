import React from "react";
import Loader from "react-loader-spinner";
import Article from "../Article";

const ArticleWrapper = ({ article }) => {
  if (article === null) {
    return (
      <>
        <p>Loading your article...</p>
        <Loader type="TailSpin" color="#00BFFF" height={"10%"} width={"10%"} />
      </>
    );
  } else {
    return (
      <Article
        author={article.author}
        date={article.date}
        text={article.text}
      />
    );
  }
};

export default ArticleWrapper;
