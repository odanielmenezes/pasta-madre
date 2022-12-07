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
    .HomePage__Apresentacao {
      background-color: ${colors.colors05}; /* Used if the image is unavailable */
      height: 100vh; /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      position: relative;

      .HomePage__Apresentacao_Content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(
          to left,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
        );
        height: 100vh;

        .HomePage__Apresentacao_Texts {
          color: #fff;

          .HomePage__Apresentacao_MainText {
            margin: 30px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            padding: 0 0 0 14%;
            text-shadow: 4px 4px 6px rgba(255, 255, 255, 0.2);
            h1 {
              font-family: "Emilys Candy", cursive;
              font-size: 110px;
              line-height: 100px;
              font-weight: 400px;
              margin: 25px 0;
              text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
              position: relative;
              img {
                right: 189px;
                top: -29px;
                position: absolute;
                width: 100px;
                transform: rotate(20deg);
                filter: drop-shadow(5px 5px 5px #000);
              }
            }
            img {
              width: 550px;
              margin-left: -27px;
            }
            small {
              font-size: 18px;
              width: 450px;
              margin-top: -40px;
            }
            button {
              font-size: 1em;
              width: 50%;
              padding: 20px 0;
              border-radius: 40px;
              outline-style: none;
              border-style: none;
              background-color: ${colors.colors05};
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
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;

      .HomePage__Sobre__Text {
        width: 600px;
        text-align: justify;
        color: #fff;

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
      height: 600px;
      position: relative;
      margin-right: 200px;
      small.Arrasta {
        color: #fff;
        margin-left: 170px;
      }
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
        width: 600px;
        height: 600px;
        position: absolute;
        right: 10%;
        top: 30%;
        margin-left: -150px;
        margin-top: -150px;
      }

      .swiper-slide {
        background-position: center;
        background-size: cover;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
      }
    }
    .softskills {
      background-color: ${colors.colors05};
      height: 100vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .softskills__items {
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
        .soft__item {
          width: 380px;
          position: relative;
          text-align: center;
          background: #00000080;
          padding: 20px;
          img {
            box-shadow: 3px 3px 5px black;
            width: 380px;
          }
          svg {
            top: -25px;
            right: -20px;
            font-size: 62px;
            position: absolute;
            color: #fff;
            filter: drop-shadow(5px 5px 5px #000);
          }
          h1 {
            font-family: "Emilys Candy", cursive;
            color: #fff;
            font-size: 42px;
            white-space: nowrap;
          }
          p {
            font-size: 22px;
            color: #fff;
          }
        }
      }
    }
    .tutorials {
      background-color: #4b1d1a;
      height: 80vh;
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
        width: 60vw;
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
      background-image: linear-gradient(
        to left,
        ${colors.colors05},
        rgba(0, 0, 0, 1)
      );
      height: 600px;
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
      min-width: 380px;
      .HomePage__Apresentacao {
        height: 80vh;

        .HomePage__Apresentacao_Content {
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          );
          height: 80vh;
          display: flex;
          justify-content: center;
          .HomePage__Apresentacao_Texts {
            .HomePage__Apresentacao_MainText {
              align-items: center;
              gap: 80px;
              padding: 0;
              img {
                width: 300px;
                margin: 0;
              }
              small {
                width: 300px;
                font-size: 1em;
                line-height: 20px;
                text-align: center;
              }
              button {
                width: 250px;
                margin: 0 auto;
              }
            }
          }
        }
      }
      .HomePage__Sobre {
        height: auto;
        display: flex;
        flex-direction: column-reverse;

        .HomePage__Sobre__Text {
          width: 90vw;
          margin: 10px 0 30px 0;

          h1 {
            text-align: center;
          }
        }
        img {
          width: 350px;
          margin: 30px 0 0 0;
        }
      }
    }
  }
`;

export default styled_homepage;
