import { Col, Row } from "antd";
import styled from "styled-components";
import Button from "./Button";
import logo from "../assets/icons/bitcoin-coin.png";
import { DownOutlined } from "@ant-design/icons";

const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  padding-top: 70px;
  overflow-x: scroll;
  position: relative;
`;
const NavigationBarContainer = styled.div`
  width: 100vw;
  height: 60px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
`;
function Menu(props) {
  return (
    <MenuWrapper>
      <NavigationBarContainer>
        <Col span={14}>
          <Row>
            <Col span={10}>
              <LogoContainer>
                <img src={logo} width={50} height={50} />
              </LogoContainer>
            </Col>
            <Col span={14}>
              <Row gutter={[10, 10]}>
                <Col span={7}>
                  <Row>
                    <Col span={24}>
                      <span style={{ fontSize: 13, textAlign: "center" }}>
                        1 BTC = 44917.79 USD{" "}
                        <DownOutlined
                          style={{ fontSize: 14, fontWeight: "bold" }}
                        />
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col></Col>
                <Col>
                  <Button
                    labelColor="white"
                    label="Open Account"
                    borderColor="#4ebc42"
                    borderWidth={1}
                    backgroundColor="#4ebc42"
                    shape="circle"
                  />
                </Col>
                <Col>
                  <Button
                    label="Login"
                    borderColor="#4ebc42"
                    borderWidth={1}
                    shape="circle"
                    labelColor="#333"
                  />
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
