import React from "react";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";

import "./Sidebar.sass";

import { FaRegHandPaper } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { GoFile } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="container-fluid sidebar"
      style={{ display: "flex", marginRight: "27px", marginTop: "8px", marginBottom: "0px"}}
    >
      <CDBSidebar textColor="#737373" backgroundColor="#FFFFFF">
        <CDBSidebarFooter>
          <div className="sidebar-btn-wrapper">
            <FaRegHandPaper/>
            Declarações de trabalho
          </div>
        </CDBSidebarFooter>
        <CDBSidebarFooter>
          <div className="sidebar-btn-wrapper">
            <HiOutlineLightBulb/>
            Pré-projetos
          </div>
        </CDBSidebarFooter>
        <CDBSidebarFooter>
          <div className="sidebar-btn-wrapper">
            <IoFileTrayFullOutline />
            Projetos
          </div>
        </CDBSidebarFooter>
        <CDBSidebarFooter>
          <div className="sidebar-btn-wrapper">
            <HiOutlineBriefcase />
            Portifólios
          </div>
        </CDBSidebarFooter>
        <CDBSidebarFooter>
          <div className="sidebar-btn-wrapper">
            <GoFile />
            Controle de demandas
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
