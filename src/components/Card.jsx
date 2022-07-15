import React from "react";
import { GoFile } from "react-icons/go";

import "./Card.sass";

import avatar from "../img/avatar.png";

const Card = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-9 justify-content-justify">
        <div className="">
          <div className="card h-100" style={{width: "300px", border:'none'}}>
            <div className="card-body">
              <h5 className="card-title" style={{ marginBottom: "-0.2rem" }}>
                Gestão de demandas do PMO
              </h5>
              <div className="card-content">
                <GoFile />
                <div className="card-components1">
                  <span>GEREL</span>
                  <span>V1</span>
                </div>
                <div className="card-components2">
                  <span>FB</span>
                  <span className="span">TV</span>
                </div>
                <img src={avatar} alt={avatar} className="avatar" />
              </div>
              <span className="card-text" style={{ fontSize: "13px" }}>
                <p style={{ marginBottom: "0rem", marginTop: "20px" }}>
                  <b>Situação:</b> Em aberto
                </p>
                <p>
                  <b>Etapa:</b> Definindo necessidades
                </p>
              </span>
              <div className="progress" style={{ height: "4px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "43%", background: "#8B5CF6", height: "4px" }}
                ></div>
              </div>
              <span className="cardfooter" style={{fontSize: "8px", fontWeight: "400"}}>
                <p>Progresso</p>
                <p>43%</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
