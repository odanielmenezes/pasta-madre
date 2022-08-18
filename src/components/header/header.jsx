import React from "react";
import Styled from "./style";
import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <Styled>
      <div className="Header">
        <div className="Header__Logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="Header__Items">
            <ul>
                <li>SOBRE NÓS</li>
                <li>CONTATO</li>
                <li>ORÇAMENTO</li>
                <li>GALERIA</li>
            </ul>
        </div>
      </div>
    </Styled>
  );
}
