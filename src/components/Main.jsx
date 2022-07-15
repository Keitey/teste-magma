import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Main = () => {
  return (
      <div
        className="container-fluid"
        style={{
          display: "flex",
          backgroundColor: "#EFEFEF",
          maxWidth: "1300px",
        }}
      >
        <Sidebar />
        <Navbar />
      </div>
  );
};

export default Main;
