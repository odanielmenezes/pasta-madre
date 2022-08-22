import React from "react";
import Styled from "./style";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Styled>
      <div className="Header">
        <div className="Header__Logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="Header__Items">
            <ul>
                <Link to="/"><li>HOME</li></Link>
                <li>CONTATO</li>
                <Link to="/orcamento"><li>ORÇAMENTO</li></Link>
                <li>GALERIA</li>
            </ul>
        </div>
      </div>
    </Styled>
  );
}
