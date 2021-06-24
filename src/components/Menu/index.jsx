import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import Button from "../Button";
import logo from "../../assets/icons/bitcoin-coin.png";
import { DownOutlined } from "@ant-design/icons";
import DropDownMenu2 from "./DropDownMenu2";
import { Link, useLocation } from "react-router-dom";
import useFindPathName from "../../hooks/useFindPathName";

const MenuWrapper = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;
  position: relative;
`;
const NavigationBarContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: ${(props) => props.heightMenu};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ebf1f8;
  transition: 500ms;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
`;
const StyledPriceText = styled.span`
  font-size: 14px;
  text-align: center;
`;

function Menu(props) {
  const location = useLocation();
  const path = useFindPathName(location);
  const [height, setHeight] = useState("106px");
  const changeHeightMenu = () => {
    if (window.scrollY < 200) {
      setHeight("106px");
    } else {
      setHeight("60px");
    }
  };

  useEffect(() => {
    if (path === "" || path === "home") {
      setHeight("106px");
      window.addEventListener("scroll", changeHeightMenu);
    } else {
      setHeight("60px");
    }
    return () => {
      window.removeEventListener("scroll", changeHeightMenu);
    };
  }, [path]);
  return (
    <MenuWrapper>
      <NavigationBarContainer heightMenu={height}>
        <Col span={14}>
          <Row align="middle">
            <Col span={9}>
              <LogoContainer>
                <Link to="/">
                  <img src={logo} alt="logo" width={50} height={50} />
                </Link>
              </LogoContainer>
            </Col>
            <Col span={15}>
              <Row justify="end" align="middle" gutter={[20, 10]}>
                <Col>
                  <DropDownMenu2>
                    <StyledPriceText>
                      1 BTC = 44917.79 USD <DownOutlined />
                    </StyledPriceText>
                  </DropDownMenu2>
                </Col>
                <Col>
                  <Link to="/about">About Coin</Link>
                </Col>
                <Col>
                  <span>ES</span>
                </Col>
                <Col>
                  <Link to="/sign_up">
                    <Button
                      labelColor="white"
                      label="Open Account"
                      borderColor="#4ebc42"
                      borderWidth={1}
                      backgroundColor="#4ebc42"
                      shape="circle"
                    />
                  </Link>
                </Col>
                <Col>
                  <Link to="/login">
                    <Button
                      label="Login"
                      borderColor="#4ebc42"
                      borderWidth={1}
                      shape="circle"
                      labelColor="#333"
                    />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </NavigationBarContainer>
      {props.children}
    </MenuWrapper>
  );
}
export default Menu;
