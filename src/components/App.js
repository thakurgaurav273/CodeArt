import React from "react";

import Editor from "./Editor";
function App() {
  return (
    <>
      <div className="top-container">
        <Editor/>
        <Editor/>
        <Editor/>
      </div>
      <div className="container">
        <iframe  
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        />
      </div>
    </>
  );
}

export default App;
