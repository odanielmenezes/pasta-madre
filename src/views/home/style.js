import styled from "styled-components";
import ImgApresent from "../../assets/apresent.jpg";

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
      background-image: url(${ImgApresent});
      background-color: #cccccc; /* Used if the image is unavailable */
      height: 100vh; /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */

      .HomePage__Apresentacao_Content {
        display: flex;
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
            display: flex;
            flex-direction: column;
            gap: 40px;
            padding: 0 0 0 14%;
            text-shadow: 4px 4px 6px rgba(255, 255, 255, 0.2);
            img {
              width: 550px;
              margin-left: -27px;
            }
            small {
              font-size: 16px;
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
              box-shadow: 4px 4px 6px rgba(255, 255, 255, 0.2);
              cursor: pointer;
              transition: 0.1s;
            }
            button:hover {
              transform: scale(1.03);
              box-shadow: 6px 6px 8px rgba(255, 255, 255, 0.2);
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
      justify-content: space-evenly;
      align-items: center;

      .HomePage__Sobre__Text {
        width: 600px;
        text-align: justify;
        color: #FFF;

        h1 {
          text-align: center;
        }
      }
      img {
        width: 500px;
        border-radius: 5px;
        box-shadow: 4px 4px 6px rgba(255, 255, 255, 0.2);
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
