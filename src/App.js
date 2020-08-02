import React from "react";

function App() {
  React.useEffect(() => {
    console.log(document.__article);
  }, []);
  return <div>Hello</div>;
}

export default App;
