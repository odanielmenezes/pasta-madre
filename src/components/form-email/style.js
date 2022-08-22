import styled from "styled-components";

const colors = {
  colors01: "#d4bdb0",
  colors02: "#dca554",
  colors03: "#dca554",
  colors04: "#9b5a45",
  colors05: "#4b1d1a",
};

const styled_sendermail = styled.div`
  .SenderEmail {
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .separator {
        height: 300px;
        margin: 0;
        border: none;
        border-left: 1px solid rgba(150, 150, 150, .3);
    }

    .SenderEmail__Form {
      display: flex;
      gap: 20px;
      flex-direction: column;
      width: 500px;

      .SenderEmail__UserInfos {
        font-size: 13px;
        width: 300px;
        padding: 5px;
        border: none;
        outline: none;
        border-bottom: 1px solid ${colors.colors01};
        color: ${colors.colors05};
      }

      .SenderEmail__UserMessage {
        font-size: 13px;
        border: 1px solid ${colors.colors01};
        color: ${colors.colors05};
        padding: 5px;
        height: 200px;
        max-width: 486px;
        max-height: 250px;
        min-width: 250px;
        outline: none;
      }
      .SenderEmail__UserMessage::-webkit-scrollbar {
        display: none;
      }
      button {
        padding: 10px;
        background-color: ${colors.colors05};
        border: none;
        color: ${colors.colors01};
        cursor: pointer;
      }
    }
    .SenderEmail__Contatcs {
        width: 360px;
        h3 {
            text-align: center;
            color: ${colors.colors05};
        }
        hr {
          border: none;
          border-bottom: 1px solid rgba(150, 150, 150, .3);
        }
        .redes {
          margin: 20px 0 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;

          small {
            color: ${colors.colors05};
          }

          .icons {
            display: flex;
            gap: 20px;

            svg {
              font-size: 30px;
              color: rgba(0,0,0, .5);
              cursor: pointer;
              transition: .2s;
            }
            svg:hover {
              color: ${colors.colors05};
              transition: .2s;
            }
          }
        }
    }
  }
  .SenderEmail__MessageSend {
    background-color: rgba(0,0,0, .7);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .SenderEmail__MessageSend__Modal {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${colors.colors01};
      gap: 20px;
      background-color: ${colors.colors05};
      width: 600px;
      height: 300px;

      svg.iconClose {
        margin-left: 550px;
        position: absolute;
          margin-top: -250px;
          font-size: 20px;
          cursor: pointer;
      }
    }
  }
`;

export default styled_sendermail;
