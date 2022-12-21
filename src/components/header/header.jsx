import React, { useState } from "react";
import Styled from "./style";
import { Anchor } from "antd";

const { Link } = Anchor;

export function Header() {
  const [home, setHome] = useState(false);
  const [soft, setSoft] = useState(false);
  const [acessorios, setAcessorios] = useState(false);
  const [horarios, setHorarios] = useState(false);
  const [tutorials, setTutorials] = useState(false);

  function teste(e) {
    console.log(e);
    if (e.target.innerText === "Home") {
      setHome(true);
      setSoft(false);
      setAcessorios(false);
      setHorarios(false);
      setTutorials(false);
      console.log("AAAAAAA");
    } else if (e.target.innerText === "Destaques") {
      setHome(false);
      setSoft(true);
      setAcessorios(false);
      setHorarios(false);
      setTutorials(false);
      console.log("XXXXXXXX");
    } else if (e.target.innerText === "Acessórios") {
      setHome(false);
      setSoft(false);
      setAcessorios(true);
      setHorarios(false);
      setTutorials(false);
    } else if (e.target.innerText === "Horário e Localização") {
      setHome(false);
      setSoft(false);
      setAcessorios(false);
      setHorarios(true);
      setTutorials(false);
    } else if (e.target.innerText === "Videos") {
      setHome(false);
      setSoft(false);
      setAcessorios(false);
      setHorarios(false);
      setTutorials(true);
    }
  }
  return (
    <Styled>
      <div className="Header">
        <div className="Header__Items">
          <Anchor style={{ display: "flex" }} className="ancor">
            <Link
              href="#inicio"
              title={
                <small
                  style={home ? { borderBottom: "1px solid #FFF"} : {}}
                  onClick={(e) => teste(e)}
                >
                  Home
                </small>
              }
            />
            <Link
              href="#softskills"
              title={
                <small
                  style={soft ? { borderBottom: "1px solid #FFF"} : {}}
                  onClick={(e) => teste(e)}
                >
                  Destaques
                </small>
              }
            />
            <Link
              href="#acessorios"
              title={
                <small
                  style={acessorios ? { borderBottom: "1px solid #FFF"} : {}}
                  onClick={(e) => teste(e)}
                >
                  Acessórios
                </small>
              }
            />
            <Link
              href="#horarios"
              title={
                <small
                  style={horarios ? { borderBottom: "1px solid #FFF"} : {}}
                  onClick={(e) => teste(e)}
                >
                  Horário e Localização
                </small>
              }
            />
            <Link
              href="#tutorials"
              title={
                <small
                  style={tutorials ? { borderBottom: "1px solid #FFF"} : {}}
                  onClick={(e) => teste(e)}
                >
                  Videos
                </small>
              }
            />
          </Anchor>
        </div>
      </div>
    </Styled>
  );
}
