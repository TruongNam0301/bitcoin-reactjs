import { Col, Row } from "antd";
import styled from "styled-components";
import Button from "./Button";
import logo from "../assets/icons/bitcoin-coin.png";
import { DownOutlined } from "@ant-design/icons";
import DropDownMenu from "./DropDownMenu";

const MenuWrapper = styled.div`
  width: 100%;
  padding: 0;
  padding-top: 70px;
  overflow: hidden;
  position: relative;
  margin-bottom:50px;
`;
const NavigationBarContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ebf1f8;
  
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
  return (
    <MenuWrapper>
      <NavigationBarContainer>
        <Col span={14}>
          <Row align="middle">
            <Col span={9}>
              <LogoContainer>
                <img src={logo} width={50} height={50} />
              </LogoContainer>
            </Col>
            <Col span={15}>
              <Row justify="end" align="middle" gutter={[20, 10]}>
                <Col>
                  <DropDownMenu trigger="hover" placement="bottomCenter">
                    <StyledPriceText>
                      1 BTC = 44917.79 USD <DownOutlined />
                    </StyledPriceText>
                  </DropDownMenu>
                </Col>
                <Col>
                  <span>Developes</span>
                </Col>
                <Col>
                  <span>ES</span>
                </Col>
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
