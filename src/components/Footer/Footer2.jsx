import { Row, Col } from "antd";
import React from "react";
import styled from "styled-components";

const StyledLabel = styled.p`
  font-size: 13px;
  font-weight: bold;
`;
const StyledLink = styled.div`
  font-size: 15px;
`;
const StyledIcon = styled.img`
  padding-right: 5px;
`;
const StyledRow1 = styled(Row)`
  padding: 65px 0 60px 0;
  background-color: white;
`;
const StyledRow2 = styled(Row)`
  height: 115px;
  background-color: rgb(246, 249, 252);
`;
function Footer2(props) {
  return (
    <div>
      <StyledRow1 justify="center">
        <Col span={14}>
          <Row justify="space-between">
            <Col span={4}>
              <div>Bitso</div>
            </Col>
            <Col span={5}>
              <div>
                <StyledLabel>COMPANY</StyledLabel>
                <StyledLink>
                  <div>Home</div>
                  <div>Fees</div>
                  <div>Blogs</div>
                  <div>Join the team</div>
                </StyledLink>
              </div>
            </Col>
            <Col span={5}>
              <div>
                <StyledLabel>PRODUCTS</StyledLabel>
                <StyledLink>
                  <div>Bitso App</div>
                  <div>Bitso Alpha</div>
                </StyledLink>
              </div>
            </Col>
            <Col span={5}>
              <div>
                <StyledLabel>RESOURCES</StyledLabel>
                <StyledLink>
                  <div>Help Center</div>
                  <div>Api Document</div>
                </StyledLink>
              </div>
            </Col>
            <Col span={5}>
              <div>
                <StyledLabel>LANGUAGE</StyledLabel>
                <div>
                  <StyledIcon src="https://img.icons8.com/material/24/000000/youtube-play--v1.png" />
                  <StyledIcon src="https://img.icons8.com/material/24/000000/facebook-new.png" />
                  <StyledIcon src="https://img.icons8.com/material/24/000000/instagram-new--v1.png" />
                  <StyledIcon src="https://img.icons8.com/material/24/000000/twitter-squared.png" />
                  <StyledIcon src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </StyledRow1>
      <StyledRow2 justify="center" align="middle">
        <Col span={14}>
          <StyledLink>
            <Row justify="space-between">
              <Col> Legal Information</Col>
              <Col>2014 - 2021 ©Bitso - all rights reserved Bitso®</Col>
              <Col>All systems operational</Col>
            </Row>
          </StyledLink>
        </Col>
      </StyledRow2>
    </div>
  );
}

export default Footer2;
