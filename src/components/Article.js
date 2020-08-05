import React from "react";
const Article = ({ article }) => {
  const d = new Date(article.date);
  const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString();

  return (
    <div>
      <h2>{article.author}</h2>
      <p>
        {date} @ {time}
      </p>
      <p>{article.text}</p>
    </div>
  );
};

export default Article;
