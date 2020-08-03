import React from "react";

function App() {
  React.useEffect(() => {
    console.log("MOUNTED");
    console.log(document.__article);
  }, []);
  return (
    <div>
      <p>Hello</p>
      <h1>hhheight1</h1>
    </div>
  );
}

export default App;
