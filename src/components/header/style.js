import styled from "styled-components";

const colors = {
  colors01: "#d4bdb0",
  colors02: "#FFF",
  colors03: "#dca554",
  colors04: "#9b5a45",
  colors05: "#4b1d1a",
};

const styled_header = styled.div`
  .Header {
    width: auto;
    height: 100vh;
    background-color: ${colors.colors05};
    padding: 30px 0 0 0;
    button.ant-btn.css-dev-only-do-not-override-1ij74fp.ant-btn-primary {
      display: flex;
      margin: auto;
      align-items: center;
      background-color: transparent;
      animation: none;
      font-size: 22px;
    }
    :where(
        .css-dev-only-do-not-override-1ij74fp
      )[ant-click-animating-without-extra-node="true"],
    :where(.css-dev-only-do-not-override-1ij74fp)[ant-click-animating="true"] {
      --antd-wave-shadow-color: transparent;
      border: none;
      /* --scroll-bar: 0; */
      /* position: relative; */
    }
    :where(.css-dev-only-do-not-override-1ij74fp).ant-btn-primary {
    box-shadow: none;
}
    ul.ant-menu.ant-menu-root.ant-menu-vertical.ant-menu-dark.ant-menu-inline-collapsed.css-dev-only-do-not-override-1ij74fp {
      height: 100vh;
      background-color: ${colors.colors05};
      box-shadow: 2px 2 px 6px rgba(0, 0, 0, 0.8);
    }
    ul.ant-menu.ant-menu-root.ant-menu-inline.ant-menu-dark.css-dev-only-do-not-override-1ij74fp {
      height: 100vh;
      background-color: ${colors.colors05};
    }
    li.ant-menu-item.ant-menu-item-selected {
      background-color: rgba(0, 0, 0, 0.8);
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
