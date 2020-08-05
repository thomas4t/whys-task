import React from "react";
const Article = ({ author, date, text }) => {
  const dateData = new Date(date);
  const _date = {
    date: dateData.toLocaleDateString(),
    time: dateData.toLocaleTimeString(),
  };
  return (
    <div>
      <h2>{author}</h2>
      <p>
        {_date.date} @ {_date.time}
      </p>
      <p>{text}</p>
    </div>
  );
};

export default Article;
