import React from "react";
import "./Header.sass";

import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";

import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid container-md" style={{paddingLeft: '0px'}}>
            <div className="logo-nav">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" style={{marginRight:"10px"}}/>
              <h2>PMO</h2>
              <h2 style={{marginRight:"30px"}}>Soft</h2>
              <AiOutlineMenu color="#fff" size={30}/>
            </div>
            <div className="icons-nav">
              <HiOutlineBell color="#fff" size={28}/>
              <BsPerson color="#fff" size={28}/>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Header;
