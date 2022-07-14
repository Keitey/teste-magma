import React from "react";
import "./Pagination.sass";

const Pagination = () => {
  return (
    <div className="justify-content-end">
      <ul className="pagination justify-content-end" style={{backgroundColor: '#EFEFEF', width: '100%', height: '100%'}}>
        <li className="page-item nav">
          <a href="#">&lt;</a>
        </li>
        <li className="page-item active" aria-current="page">
          <a href="#" className="page-link" style={{backgroundColor: "#8B5CF6"}}>
            1
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link" style={{backgroundColor: "#EFEFEF", color: "#A3A3A3"}}>2</a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link" style={{backgroundColor: "#EFEFEF", color: "#A3A3A3"}}>3</a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link" style={{backgroundColor: "#EFEFEF", color: "#A3A3A3"}}>4</a>
        </li>
        <li className="page-item nav" style={{marginRight: "18px"}}>
          <a href="#">&gt;</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
