import React from "react";
import Article from "../Article";
import CustomLoader from "../CustomLoader";

const ArticleWrapper = ({ article }) => {
  if (article === null) {
    return <CustomLoader message="Loading your article..." />;
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
