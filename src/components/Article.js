import React from "react";
const Article = ({ author, date, text }) => {
  return (
    <div>
      <h2>{author}</h2>
      <p>
        {date.date} @ {date.time}
      </p>
      <p>{text}</p>
    </div>
  );
};

export default Article;
