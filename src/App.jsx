import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import "./Responsive.sass"

const App = () => {
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
