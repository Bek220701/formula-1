import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, } from "react-router-dom";
const Block = ({ name, surname, flag, form, human, id, color }) => {
  return (
    <div id="block">
      <div className="container">
        <div className="block">
          <div className="fios">
            <div className="fio">
              <h1 className="text-name">{name}</h1>
              <h1 className="text-sur">{surname}</h1>
            </div>
            <img src={flag} className="flag" alt="img" />
          </div>
          <div className="line"></div>
          <div className="sans">
            <div className="san">
              <h4>{form}</h4>
              <Link>
                <IoIosAddCircleOutline />
              </Link>
              <h2 style={{ color:`${color}`}}>{id} </h2>
            </div>
            <img src={human} className="human" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
