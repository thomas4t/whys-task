import React from "react";
const Article = ({ author, date, text }) => {
  return (
    <div>
      <h2>{author}</h2>
      <p>Date: {date}</p>
      <p>{text}</p>
    </div>
  );
};

export default Article;
