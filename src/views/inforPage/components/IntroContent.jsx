import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const StyledLabelWapper = styled(Row)`
  margin-bottom: 80px;
`;
const StyledLabel = styled.div`
  font-size: 32px;
  color: rgb(78, 188, 66);
`;
const StyledContent = styled.span`
  font-size: 36px;
  letter-spacing: 0.2px;
  font-weight: 100;
`;

function IntroContent(props) {
  return (
    <Row justify="center">
      <Col >
        <StyledLabelWapper justify="space-between">
          <Col>
            <StyledLabel>2 million+</StyledLabel>
            <span>users trust us</span>
          </Col>
          <Col>
            <StyledLabel>27,835,600 </StyledLabel>
            <span>trading transactions </span>
          </Col>
          <Col>
            <StyledLabel>9,123,180</StyledLabel>
            <span>payments in local currency</span>
          </Col>
          <Col>
            <StyledLabel>7,010,222</StyledLabel>
          </Col>
        </StyledLabelWapper>
        <Row style={{ marginBottom: "100px" }}>
          <Col>
            <StyledContent>
              Evolve your money. Explore Bitso and discover new ways to use
              money.
            </StyledContent>
          </Col>
        </Row>
        
        
      </Col>
    </Row>
  );
}

export default IntroContent;
