import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import styled from "styled-components";

function marketStats() {
  const StyledCol = styled(Col)`
    display:flex;
    padding: 10px;
    background-color: #f6f9fc;
    height: 140px;
    justify-content:center;
    align-items:center;
  `;
  const StyledTrade = styled(StyledCol)`
    background-color: #ffff;
  `;


  return (
    <Row justify="center">
      <Col span={18}>
        <Row>
          <StyledCol span={18}>
            <Row>
              <Col span={8}>
                <h4>24 Hour Volume </h4>
                <div> 14.27305264 BTC</div>
              </Col>
              <Divider />
              <Col span={8}>
                <Row wrap>
                  <Col span={24}>High $49,803.70 USD </Col>
                  <Col span={24}>Low $49,232.53 USD</Col>
                </Row>
              </Col>
              <Divider />
              <Col span={8}>
                <Row wrap>
                  <Col span={24}>High $49,803.70 USD </Col>
                  <Col span={24}>Low $49,232.53 USD</Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap>
                  <Col span={24}>High $49,803.70 USD </Col>
                  <Col span={24}>Low $49,232.53 USD</Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap>
                  <Col span={24}>High $49,803.70 USD </Col>
                  <Col span={24}>Low $49,232.53 USD</Col>
                </Row>
              </Col>
            </Row>
          </StyledCol>
          <StyledTrade span={6}>$49,432.23 USD</StyledTrade>
        </Row>
      </Col>
    </Row>
  );
}

export default marketStats;
