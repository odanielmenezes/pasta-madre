import styled from "styled-components";

const colors = {
  colors01: "#d4bdb0",
  colors02: "#dca554",
  colors03: "#dca554",
  colors04: "#9b5a45",
  colors05: "#4b1d1a",
};

const styled_homepage = styled.div`
  .HomePage {
    background-color: #4b1d1a;
    .HomePage__Apresentacao {
      background-color: ${colors.colors05}; /* Used if the image is unavailable */
      height: auto; /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      position: relative;

      .HomePage__Apresentacao_Content {
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(0, 0, 0, 0.2);
        height: 100vh;

        .HomePage__Apresentacao_Texts {
          color: #fff;

          .HomePage__Apresentacao_MainText {
            display: flex;
            flex-direction: column;
            gap: 40px;
            text-shadow: 4px 4px 6px rgba(255, 255, 255, 0.2);
            h1 {
              font-family: "Emilys Candy", cursive;
              font-size: 110px;
              line-height: 100px;
              font-weight: 400px;
              margin: 25px 0;
              text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
              position: relative;
              width: 500px;
            }
            img {
              width: 450px;
              margin: 50px auto;
              filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 1));
            }
            small {
              font-size: 20px;
              width: 450px;
              margin-top: -40px;
              text-align: justify;
            }
            a {
              width: 50%;
              margin: 20px auto;
            }
            button {
              font-size: 1em;
              width: 100%;
              padding: 20px 0;
              border-radius: 40px;
              outline-style: none;
              border-style: none;
              background-color: #00b52c;
              color: #fff;
              font-weight: bold;
              box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
              cursor: pointer;
              transition: 0.1s;
            }
            button:hover {
              transform: scale(1.03);
              box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
              transition: 0.1s ease-in;
            }
          }
        }
      }
    }
    .HomePage__Sobre {
      background-color: ${colors.colors05};
      height: auto;
      padding: 100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;
      .HomePage__Sobre__Img {
        .swiper {
          width: 500px;
          height: 500px;
          padding: 50px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 500px;
          height: 500px;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
        }
      }

      .HomePage__Sobre__Text {
        width: 600px;
        text-align: justify;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        h1 {
          text-align: center;
          font-family: "Emilys Candy", cursive;
          font-size: 62px;
          white-space: nowrap;
          width: auto;
          line-height: 55px;
        }
        p {
          font-size: 22px;
          text-align: center;
        }
        button {
          font-size: 1em;
          width: 300px;
          padding: 20px 0;
          border-radius: 40px;
          outline-style: none;
          border-style: none;
          background-color: #00b52c;
          color: #fff;
          font-weight: bold;
          box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
          cursor: pointer;
          transition: 0.1s;
          border: 1px solid #000;
          margin: 20px 0;
        }
        button:hover {
          transform: scale(1.03);
          box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
          transition: 0.1s ease-in;
        }
      }
      img {
        width: 500px;
        border-radius: 5px;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
      }
    }
    .teste {
      height: 100vh;
      display: grid;

      .item {
        border-radius: 3px;
        height: 600px;
        color: #fff;
      }

      .mainItem {
        grid-area: mainItem;
        background-color: red;
      }
      .item02 {
        grid-area: item02;
        background-color: black;
        height: 300px;
      }
      .item03 {
        grid-area: item03;
        background-color: yellow;
        height: 300px;
      }
      .item04 {
        grid-area: item04;
        background-color: blue;
        height: 300px;
      }
      .item05 {
        grid-area: item05;
        background-color: tomato;
        height: 300px;
      }
      .item06 {
        grid-area: item06;
        background-color: turquoise;
        height: 300px;
      }
    }
    .grid-template {
      grid-template-areas:
        "mainItem item02 item03 item04 item04"
        "mainItem item05 item05 item06 item06"
        "mainItem item05 item05 item06 item06";
    }
    .carousel {
      width: 600px;
      position: relative;
      small.Arrasta {
        color: #fff;
        margin-left: 240px;
      }
      .mySwiper {
        #app {
          height: 100%;
        }
        html,
        body {
          position: relative;
          height: 100%;
        }

        body {
          background: #eee;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }

        .swiper {
          width: 200px !important;
          height: 200px !important;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -150px;
          margin-top: -150px;
        }

        .swiper-slide {
          margin-top: 10px;
          background-position: center;
          background-size: cover;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
        }
      }
    }
    .softskills {
      background-color: ${colors.colors05};
      height: auto;
      padding: 100px 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .softskills__items {
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
        .soft__item {
          background: rgba(0, 0, 0, 0.2);
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          text-align: center;
          padding: 50px 0;

          .SoftTexts__Item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
          }
          img {
            box-shadow: 3px 3px 5px black;
            width: 380px;
          }
          svg {
            color: #fff;
            filter: drop-shadow(5px 5px 5px #000);
          }
          h1 {
            font-family: "Emilys Candy", cursive;
            color: #fff;
            font-size: 42px;
          }
          p {
            margin: 0 auto;
            width: 90%;
            font-size: 22px;
            color: #fff;
          }
        }
      }
    }
    .footer {
      background: rgba(0, 0, 0, 0.2);
      height: auto;
      padding: 50px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      .LogoPasta {
        width: 170px;
        margin: 0 20px;

        img {
          width: 100%;
          filter: drop-shadow(3px 3px 3px #000);
        }
      }
      .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 30px;
        .siga-nos {
          font-size: 13px;
          margin: 10px 0;
        }
        .icons {
          display: flex;
          gap: 15px;
          a {
            text-decoration: none;
            color: #fff;
          }
          svg {
            cursor: pointer;
            font-size: 42px;
            transition: 0.3s;

            :hover {
              transform: rotate(-20deg);
              filter: drop-shadow(2px 2px 2px #000);
              transition: 0.3s;
            }
          }
        }
      }
    }
    .transportadoras {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.2);
      height: auto;
      padding: 50px 0;

      gap: 100px;
      .transportadora {
        width: 220px;
        img {
          filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 1));
          width: 100%;
        }
      }
    }
    .tutorials {
      background-color: #4b1d1a;
      height: auto;
      padding: 100px 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-family: "Emilys Candy", cursive;
        color: #fff;
        font-size: 42px;
        margin: 0 auto;
        text-align: center;
      }
      .swiper {
        width: 80%;
        height: 600px;
      }

      .swiper-slide {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: center;
        font-size: 18px;
        background: transparent;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .horarios {
      background: rgba(0, 0, 0, 0.2);
      height: auto;
      padding: 100px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;

      .times {
        color: #fff;
        text-align: right;

        h1 {
          font-family: "Emilys Candy", cursive;
          font-size: 42px;
        }
        p {
          line-height: 10px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .HomePage {
      width: 100vw !important;
      height: auto !important;
      overflow: hidden !important;
      .HomePage__Apresentacao {
        .HomePage__Apresentacao_Content {
          flex-direction: column;
          justify-content: center;
          padding: 0;
          height: auto;

          .HomePage__Apresentacao_Texts {
            .HomePage__Apresentacao_MainText {
              display: flex !important;
              gap: 70px;
              justify-content: center !important;
              align-items: center;
              padding: 50px 0 0 0;
              h1 {
                font-size: 66px;
                line-height: 55px;
                text-align: center;
                margin: 0 auto;
                width: 220px;
                position: relative;
              }
              img {
                width: 300px;
              }
              small {
                width: 300px;
                font-size: 13px;
                text-align: center;
              }
              a {
                text-decoration: none;
                font-size: 14px;
                display: flex;
                justify-content: center;
                width: 80%;
                margin-top: -30px;
              }
            }
          }
        }
      }
      .carousel {
        height: auto;
        padding: 50px 0;
        small {
          width: 100vw !important;
          text-align: center;
        }
        .swiper.swiper-cube.swiper-3d.swiper-initialized.swiper-horizontal.swiper-ios.swiper-watch-progress.mySwiper {
          width: 300px !important;
          height: auto;
          position: relative;
          margin: 20px auto;
          z-index: 0;
        }
        .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
          bottom: -45px;
        }
        span.swiper-pagination-bullet {
          border: 1px solid #fff;
        }
      }
      .softskills {
        width: 100vw !important;
        .softskills__items {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          .soft__item {
            gap: 30px;
            width: 80vw;
            .SoftTexts__Item {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
            }
            svg {
              font-size: 35px;
              right: 3px;
              top: -20px;
            }
            h1 {
              font-size: 20px;
              width: 95%;
              white-space: pre-wrap;

              svg {
                font-size: 1em;
                filter: drop-shadow(2px 2px 2px #000);
              }
            }
            p {
              text-align: center;
              font-size: 13px;
            }
            img {
              margin: auto;
              width: 200px;
              height: 200px;
            }
          }
        }
      }
      .transportadoras {
        display: flex;
        flex-direction: column;
      }
      .HomePage__Sobre {
        flex-direction: column;
        gap: 0px !important;
        .HomePage__Sobre__Img {
          .swiper {
            width: 300px;
            height: 300px;
            z-index: 0;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            width: 20px !important;
            font-size: 32px;
          }
          .swiper-slide {
            width: 300px;
            height: 300px;
          }
        }
        .HomePage__Sobre__Text {
          h1 {
            font-size: 35px;
            line-height: 32px;
          }
          p {
            font-size: 16px;
            width: 300px;
            margin: 0 auto;
          }
        }
        .HomePage__Sobre__Img {
          display: flex;
          img {
            width: 80%;
            margin: 0 auto;
          }
        }
      }
      .horarios {
        border: none;
        background: #4b1d1a !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .times {
          text-align: center;
          h1 {
            font-size: 34px;
          }
          h3 {
            font-size: 14px;
          }
          p {
            font-size: 13px;
          }
        }
        .maps {
          width: 300px !important;
          height: 300px !important;
        }
      }
      .tutorials {
        height: 500px;
        iframe {
          height: 252px;
        }
        .swiper.swiper-initialized.swiper-horizontal.swiper-ios.mySwiper {
          z-index: 0;
        }
        .text {
          h1 {
            font-size: 35px;
            line-height: 35px;
          }
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          width: 20px !important;
          font-size: 32px;
        }
        .swiper.swiper-initialized.swiper-horizontal.swiper-ios.mySwiper.swiper-backface-hidden {
          width: 90%;
        }
      }
      .footer {
        flex-direction: column;
        height: auto !important;
        justify-content: center;
        gap: 80px;
      }
    }
  }
`;

export default styled_homepage;
