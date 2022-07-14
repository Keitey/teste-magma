import React from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import "./Navbar.sass";

import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="">
      <nav
        className="navbar"
        style={{
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <a
          className="navbar-brand"
          style={{ color: "#737373", marginBottom: "12px" }}
        >
          Controle de demandas
        </a>
        <form className="d-flex" role="pesquisar">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Pesquisar..." />
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
