import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import backgroundBanner from "../../assets/background/download.png";

const StyledBackground = styled(Col)`
  margin-top: 108px;
  background: url(${backgroundBanner}) 0% 0% / 14px repeat;
  height: 498px;
`;

const StyledLabelBanner = styled(Row)`
  height: 100%;
  padding: 0 64px;
`;
const StyledDesBanner = styled.div`
  font-size: 15px;
  color: rgb(37, 44, 54);
  margin-bottom: 30px;
`;

const StyledBoldBanner = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 0.55px;
  color: rgb(37, 44, 54);
  margin-bottom: 9px;
  text-transform: uppercase;
`;
const StyledAnimationBanner = styled.h1`
  font-size: 56px;
  font-weight: 100;
  color: rgb(37, 44, 54);
`;

function Banner(props) {
  return (
    <div>
      <Row justify="center" align="middle">
        <StyledBackground span={14}>
          <StyledLabelBanner align="middle">
            <Col span={12}>
              <div>
                <StyledAnimationBanner>
                  Send trueUSD <br /> <span>free your money</span>
                </StyledAnimationBanner>
              </div>
              <StyledDesBanner>
                Buy and sell bitcoin or 8 other cryptocurrencies and store them
                all in one place.
              </StyledDesBanner>
              <StyledBoldBanner>
                YOUR GATEWAY TO THE GLOBAL ECONOMY
              </StyledBoldBanner>
            </Col>
            <Col span={12}></Col>
          </StyledLabelBanner>
        </StyledBackground>
      </Row>
    </div>
  );
}

export default Banner;
