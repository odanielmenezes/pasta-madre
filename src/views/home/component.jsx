import Styled from "./style";
import { Header } from "../../components/header/header";
import AcessoriosPizza from "../../assets/capa-acessorios.png";
import AcessoriosPizza01 from "../../assets/acessorio-01.png";
import AcessoriosPizza02 from "../../assets/acessorio-02.png";
import AcessoriosPizza03 from "../../assets/acessorio-03.png";
import AcessoriosPizza04 from "../../assets/acessorio-04.png";
import Logo from "../../assets/main-logo.png";
import Item01 from "../../assets/item01.png";
import Item02 from "../../assets/item02.png";
import Item03 from "../../assets/item03.png";
import Massa01 from "../../assets/massa-sabor-01.png";
import Massa02 from "../../assets/massa-sabor-02.png";
import Massa03 from "../../assets/massa-sabor-03.png";
import Massa04 from "../../assets/massa-sabor-04.jpg";
import Massa05 from "../../assets/massa-capa.png";
import Massa06 from "../../assets/massa-14cm.png";
import LogoSaoMiguel from "../../assets/logo-sao-miguel.png";
import LogoCorreios from "../../assets/logo-correios.png";
import LogoSedex from "../../assets/logo-sedex.png";
import LogoViopex from "../../assets/logo-viopex.png";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faStar,
  faCopyright,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { EffectCube, Pagination, Navigation, EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

export function Component() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: -29.93644383260633,
      lng: -51.085653934974154,
    },
    zoom: 17,
  };
  return (
    <Styled>
      <div className="HomePage">
        <Header />
        <div className="HomePage__Apresentacao" id="inicio">
          <div className="HomePage__Apresentacao_Content">
            <div className="HomePage__Apresentacao_Texts">
              <div className="HomePage__Apresentacao_MainText">
                <img src={Logo} alt="" />
                <small>
                  a pasta madre é especialista em massas pré assadas e
                  acessórios para pizza em cone, nossas massas são artesanais
                  com alto padrão de qualidade atendemos alta demanda,
                  entregamos praticidade, compromisso e agilidade ao cliente,
                  além de enviar para todo brasil.
                </small>
                <a
                  href="http://wa.me/555195594785/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    {" "}
                    Solicite um orçamento <FontAwesomeIcon icon={faWhatsapp} />
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel">
              <div className="Arrasta">
                <small>👈 arrasta pro lado 👉</small>
              </div>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Massa05} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Massa01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Massa02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Massa03} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Massa04} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Massa06} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="softskills" id="softskills">
          <div className="softskills__items">
            <div className="soft__item">
              <img src={Item01} alt="" />
              <div className="SoftTexts__Item">
                <h1>
                  Qualidade <FontAwesomeIcon icon={faStar} />
                </h1>
                <p>
                  trabalhamos com todo cuidado para lhe entregar um produto
                  padronizado e com insumos da melhor qualidade.
                </p>
              </div>
            </div>
            <div className="soft__item">
              <img src={Item02} alt="" />
              <div className="SoftTexts__Item">
                <h1>
                  Agilidade <FontAwesomeIcon icon={faClock} />
                </h1>
                <p>
                  Estamos preparados para lhe enviar o seu pedido com a maior
                  agilidade inclusive em grandes demandas.
                </p>
              </div>
            </div>
            <div className="soft__item">
              <img src={Item03} alt="" />
              <div className="SoftTexts__Item">
                <h1>
                  Envios para todo BR <FontAwesomeIcon icon={faTruckFast} />{" "}
                </h1>
                <p>
                  enviamos para todo Brasil via transportadoras expressas e
                  correios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="transportadoras" id="transportadoras">
          <div className="transportadora">
            <img src={LogoSaoMiguel} alt="" />
          </div>
          <div className="transportadora">
            <img src={LogoSedex} alt="" />
          </div>
          <div className="transportadora">
            <img src={LogoCorreios} alt="" />
          </div>
          <div className="transportadora">
            <img src={LogoViopex} alt="" />
          </div>
        </div>
        <div className="HomePage__Sobre" id="acessorios">
          <div className="HomePage__Sobre__Text">
            <h1>
              Acessórios
              <br /> para pizza cone.
            </h1>
            <p>
              Tudo em um só lugar. Fornecemos a assadeira adaptada para qualquer
              tipo de forno, (sendo acima de 40 litros), com ela você pode
              começar um negocio diferente com baixíssimo custo de investimento,
              alem de embalagens, suportes e banners.
            </p>
            <a
              href="http://wa.me/555195594785/"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Quero saber mais <FontAwesomeIcon icon={faWhatsapp} />
              </button>
            </a>
          </div>
          <div className="HomePage__Sobre__Img">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={AcessoriosPizza} alt="User" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AcessoriosPizza01} alt="User" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AcessoriosPizza02} alt="User" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AcessoriosPizza03} alt="User" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={AcessoriosPizza04} alt="User" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="horarios" id="horarios">
          <div className="times">
            <h1>Horários e Localização:</h1>
            <h3>Av Princesa Isabel - n 285 - Cachoeirinha - RS</h3>
            <p>segunda-feira a sexta-feira</p>
            <p>das 08:00 as 12:00 e das 13:30 as 18:00</p>
            <p>sábado e domingo - fechado</p>
          </div>
          <div className="maps" style={{ height: "400px", width: "400px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAfAwNIvqW7mREB9g3Z00w6Bz4M6huPfgI",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={-29.93644383260633}
                lng={-51.085653934974154}
                text="Estamos Aqui"
                color="blue"
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="tutorials" id="tutorials">
          <div className="text">
            <h1>Confira um pouco do nosso conteúdo no YouTube:</h1>
          </div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/fkZpCWS4pcQ"
                allowfullscreen
                title="Video 01"
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/Xx2DiXYibRk"
                allowfullscreen
                title="Video 01"
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/1vqIxJ9M18M"
                allowfullscreen
                title="Video 01"
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/0HEirJHebXY"
                allowfullscreen
                title="Video 01"
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/4AqHEmVGZXA"
                allowfullscreen
                title="Video 01"
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/j5moR7666t0"
                allowfullscreen
                title="Video 01"
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="footer">
          <div className="LogoPasta">
            <img src={Logo} alt="" />
          </div>
          <div className="copyright">
            <small>
              <FontAwesomeIcon icon={faCopyright} /> 2023 - Pasta Madre - Todos
              os direitos reservados
            </small>
          </div>
          <div className="infos">
            <div className="siga-nos">Fique por dentro:</div>
            <div className="icons">
              <a
                href="https://www.instagram.com/pastamdr/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/pastamdr"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="http://wa.me/555195594785/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
