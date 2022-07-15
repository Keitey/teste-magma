import React from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import "./Navbar.sass";

import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="container-fluid" style={{paddingLeft: '0px'}}>
      <nav
        className="nav"
        style={{
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "0px",
          paddingTop: "10px",
        }}
      >
        <a
          className="nav"
          style={{ color: "#737373", margin: "0px 0px 12px 0px", width: "222px"}}
        >
          Controle de demandas
        </a>
        <form className="d-flex" role="pesquisar">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Pesquisar..." />
          </div>
          <div className="icons-nav">
            <div className="icones">
              <span>
                <HiOutlineViewGrid size={37}/>
              </span>
              <span>
                <AiOutlineMenu size={37}/>
              </span>
            </div>

            <span className="icones filter">
              <BiFilterAlt size={35}/>
            </span>
          </div>
          <button className="btn" type="submit">
            + Nova Demanda
          </button>
        </form>
      </nav>
      <Cards />
      <Pagination />
    </div>
  );
};

export default Navbar;
