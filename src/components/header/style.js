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
    background-color: ${colors.colors05};

    .Header__Items {
      ul {
        background-color: ${colors.colors02};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 38px;
        margin: 0;
        padding: 0;

        a {
          text-decoration: none;
        }
        li {
          color: ${colors.colors05};
          list-style: none;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 10px;
        }
        li:hover {
          background-color: rgba(220, 165, 84, 0.1);
          color: #fff;
          cursor: pointer;
        }
      }
    }

    .Header__Logo {
      display: flex;
      justify-content: center;
      padding: 10px;
      img {
        margin: 20px;
        width: 220px;
      }
    }
  }
  @media (max-width: 600px) {
    .Header {
      width: 100vw;
      min-width: 380px;
      .Header__Logo {
        width: auto;
      }
      ul {
        li {
          font-size: 10px;
        }
      }
    }
  }
`;

export default styled_header;
