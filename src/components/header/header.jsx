import React, { useState } from "react";
import Styled from "./style";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
// import { Button, Menu } from "antd";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Galeria", "1", <PictureOutlined />),
  ];
  return (
    <Styled>
      <div className="Header">
      <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        {/* <div className="Header__Logo">
          <img src={Logo} alt="Logo" />
          <div className="Header__Icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className="Header__Items">
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <li>CONTATO</li>
            <Link to="/orcamento">
              <li>ORÇAMENTO</li>
            </Link>
            <li>GALERIA</li>
          </ul>
        </div> */}
      </div>
    </Styled>
  );
}
