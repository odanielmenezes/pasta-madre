import React, { useState } from "react";
import Styled from "./style";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import api from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header/header";

export function Component() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const sendMail = () => {
    api
      .get(`/send/${email}/${nome}/${mensagem}`, {
        body: {
          teste: "teste",
        },
      })
      .then((response) => console.log(response))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <Styled>
      <div className="HomePage">
        <Header />
        <div className="HomePage__Apresentacao">
          <div className="HomePage__Apresentacao_Content">
            <div className="HomePage__Apresentacao_Texts">
              <div className="HomePage__Apresentacao_MainText">
                <img src={Logo} alt="Lgo" />
                <small>
                  Somos especialistas em buffet exclusivo para eventos. Cuidamos
                  com muito carinho e planejamento cada detalhe para tornar seus
                  momentos ainda mais inesqueciveis!
                </small>
                <button>
                  {" "}
                  Solicite um orçamento <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="HomePage__Sobre">
          <div className="HomePage__Sobre__Text">
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="HomePage__Sobre__Img">
            <img src={User} alt="User" />
          </div>
        </div>
        <div>
          <input
            type="text"
            id="nome"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input type="text" value={mensagem} onChange={e => setMensagem(e.target.value)} />
          <button onClick={sendMail}>ENVIAR</button>
        </div>
      </div>
    </Styled>
  );
}
