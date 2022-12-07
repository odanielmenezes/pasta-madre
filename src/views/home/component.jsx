import Styled from "./style";
import AcessoriosPizza from "../../assets/frono-acessorios.png";
import Logo from "../../assets/logo.png";
import Item01 from "../../assets/item01.png";
import Item02 from "../../assets/item02.png";
import Item03 from "../../assets/item03.png";
import Massa01 from "../../assets/massa-sabor-01.png";
import Massa02 from "../../assets/massa-sabor-02.png";
import Massa03 from "../../assets/massa-sabor-03.png";
import Massa04 from "../../assets/massa-sabor-04.jpg";
import Massa05 from "../../assets/massa-sabor-05.jpg";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faTruckFast,
  faGaugeSimpleHigh,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { EffectCube, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
        <div className="HomePage__Apresentacao">
          <div className="HomePage__Apresentacao_Content">
            <div className="HomePage__Apresentacao_Texts">
              <div className="HomePage__Apresentacao_MainText">
                <h1>
                  <img src={Logo} alt="" />
                  <span>Pasta Madre</span>
                </h1>
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
                    Solicite um orçamento{" "}
                    <FontAwesomeIcon icon={faCaretRight} />
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel">
              <small className="Arrasta">👈 arrasta pro lado 👉</small>
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
              </Swiper>
            </div>
          </div>
        </div>
        <div className="HomePage__Sobre">
          <div className="HomePage__Sobre__Text">
            <h1>
              Acessórios
              <br /> para pizza cone.
            </h1>
            <p>
              fornecemos a assadeira adaptada para qualquer tipo de forno,
              (sendo acima de 40 litros), com ela você pode começar um negocio
              diferente com baixíssimo custo de investimento, alem de
              embalagens, suportes e banners.
            </p>
          </div>
          <div className="HomePage__Sobre__Img">
            <img src={AcessoriosPizza} alt="User" />
          </div>
        </div>
        <div className="softskills">
          <div className="softskills__items">
            <div className="soft__item">
              <FontAwesomeIcon icon={faStar} />
              <img src={Item01} alt="" />
              <h1>Qualidade</h1>
              <p>
                trabalhamos com todo cuidado para lhe entregar um produto
                padronizado e com insumos da melhor qualidade.
              </p>
            </div>
            <div className="soft__item">
              <FontAwesomeIcon icon={faGaugeSimpleHigh} />
              <img src={Item02} alt="" />
              <h1>Agilidade</h1>
              <p>
                Estamos preparados para lhe enviar o seu pedido com a maior
                agilidade inclusive em grandes de mandas.
              </p>
            </div>
            <div className="soft__item">
              <FontAwesomeIcon icon={faTruckFast} />
              <img src={Item03} alt="" />
              <h1>Envios para todo BR</h1>
              <p>
                enviamos para todo Brasil via transportadoras expressas e
                correios.
              </p>
            </div>
          </div>
        </div>
        <div className="horarios">
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
        <div className="tutorials">
          <div className="text">
            <h1>Confira um pouco do nosso conteúdo no youtube:</h1>
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
      </div>
    </Styled>
  );
}
