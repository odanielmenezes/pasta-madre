import React, { useCallback, useState } from "react";
import Styled from "./style";
import api from "../../api/api";
import { Header } from "../header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function SenderEmail() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [send, setSend] = useState(false);

  const sendMail = useCallback(() => {
    setSend(true);
    api
      .get(`/send/${email}/${nome}/${mensagem}`)
      .then((response) => console.log(response))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    setEmail("");
    setNome("");
    setMensagem("");
  }, [email, mensagem, nome]);

  const closeModal = () => {
    setSend(false);
  };

  console.log(send);

  const messageSend = () => {
    return (
      <div className="SenderEmail__MessageSend">
        <div className="SenderEmail__MessageSend__Modal">
          <FontAwesomeIcon
            className="iconClose"
            icon={faCircleXmark}
            onClick={closeModal}
          />
          <h2>
            Mensagem enviada com sucesso! <FontAwesomeIcon icon={faEnvelope} />
          </h2>
          <small>
            Se o email estiver correto nós já recebemos sua mensagem e em breve
            entraremos em contato.
          </small>
        </div>
      </div>
    );
  };

  return (
    <Styled>
      <Header />
      {send && messageSend()}
      <div className="SenderEmail">
        <div className="SenderEmail__Contatcs">
          <h3>
            Deixe seu recado e em breve nossa equipe fará contato com você!
          </h3>
          <hr />
          <div className="redes">
            <small>Acompanhe nosso trabalho:</small>
            <div className="icons">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
        <hr className="separator" />
        <div className="SenderEmail__Form">
          <input
            placeholder="Informe seu e-mail"
            type="text"
            className="SenderEmail__UserInfos"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Informe seu nome"
            type="email"
            name="email"
            value={nome}
            className="SenderEmail__UserInfos"
            onChange={(e) => setNome(e.target.value)}
          />
          <textarea
            placeholder="INFORME AQUI SUAS DÚVIDAS SOBRE ORÇAMENTOS OUS OUTRAS INFORMAÇÕES"
            type="name"
            value={mensagem}
            className="SenderEmail__UserMessage"
            onChange={(e) => setMensagem(e.target.value)}
          />
          <button onClick={sendMail}>ENVIAR</button>
        </div>
      </div>
    </Styled>
  );
}
