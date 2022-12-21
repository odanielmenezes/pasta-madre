import styled from "styled-components";

const colors = {
  colors01: "#d4bdb0",
  colors02: "#dca554",
  colors03: "#dca554",
  colors04: "#9b5a45",
  colors05: "#4b1d1a",
};

const styled_header = styled.div`
  .Header {
    width: auto;
    position: relative;
    background-color: ${colors.colors05};
    position: fixed;
    z-index: 1;
    padding: 0 20px;
    border-radius: 30px;
    margin: 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 3px #000;
    .Header__Items {
      a {
        color: #fff !important;
      }
      .ant-anchor {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .ant-anchor-link {
          display: flex;
          justify-content: center;
          a.ant-anchor-link-title.ant-anchor-link-title {
            small {
              font-size: 13px;
              margin-right: 11px;
            }
          }
        }
        .ant-anchor-ink {
          display: none;
        }
      }
      display: flex;
    }
  }
  @media (max-width: 600px) {
    .Header {
      display: flex;
      justify-content: center;
      width: 100vw !important;
      max-width: 100vw;
      margin: 0 auto 0 -30px;
      border-radius: 0;
      z-index: 1;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      .Header__Items {
        .ant-anchor {
          gap: 0;
          margin-left: 0 auto;
          .ant-anchor-link {
            display: flex;
            justify-content: center;
            a.ant-anchor-link-title.ant-anchor-link-title {
              margin: 0 -5px;
              small {
                font-size: 11px;
                margin-right: 11px;
              }
            }
          }
          .ant-anchor-ink {
            display: none;
          }
        }
        display: flex;
      }
    }
  }
`;

export default styled_header;
