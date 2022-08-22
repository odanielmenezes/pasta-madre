import Styled from "./style";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header/header";

export function Component() {
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
                <Link to="/orcamento">
                  <button>
                    {" "}
                    Solicite um orçamento{" "}
                    <FontAwesomeIcon icon={faCaretRight} />
                  </button>
                </Link>
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
      </div>
    </Styled>
  );
}
