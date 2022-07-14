import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Main = () => {
  return (
      <div
        className="container-main fluid"
        style={{
          display: "flex",
          backgroundColor: "#EFEFEF",
        }}
      >
        <Sidebar />
        <Navbar />
      </div>
  );
};

export default Main;
