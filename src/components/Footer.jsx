import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import Button from "./Button";

const StyledFooterWapper = styled(Row)`
  background-color: black;
  color: white;
  padding: 50px 0;
`;

function Footer(props) {
  return (
    <StyledFooterWapper justify="center">
      <Col span={14}>
        <Row gutter={[70, 100]}>
          <Col span={8}>
            <div style={{ borderBottom: "1px solid white" }}>
              <h4 style={{ color: "white" }}> LATEST BLOG </h4>
            </div>
            <div>What are chart patterns? ...</div>
          </Col>
          <Col span={8}>
            <div style={{ borderBottom: "1px solid white" }}>
              <h4 style={{ color: "white" }}> KNOWLEDGE CENTER </h4>
            </div>
            <div>
              How do I buy bitcoins in Mexico?
              <br />
              <span>
                Buying bitcoins through Bitsois very simple. Firstly, make an
                account with us. It's free,quick and easy...
              </span>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ borderBottom: "1px solid white" }}>
              <h4 style={{ color: "white" }}> WE ARE HIRING </h4>
            </div>
            <div>
              Come join Bitso!
              <br />
              <span>We are looking for talented people to join our team.</span>
            </div>
          </Col>
          <Col span={8}>
            <div >
              <Button
                label="READ MORE"
                labelColor="white"
                borderWidth={2}
                boderType="solid"
                backgroundColor="black"
                borderColor="white"
                shape="square"
              />
            </div>
          </Col>
          <Col span={8}>
            <Button
              label="READ MORE"
              labelColor="white"
              borderWidth={2}
              boderType="solid"
              backgroundColor="black"
              borderColor="white"
              shape="square"
            />
          </Col>
          <Col span={8}>
            <Button
              label="READ MORE"
              labelColor="white"
              borderWidth={2}
              boderType="solid"
              backgroundColor="black"
              borderColor="white"
              shape="square"
            />
          </Col>
          <Col span={8}>
            <div style={{ borderBottom: "1px solid white" }}>
              <h4 style={{ color: "white" }}> NOTICES </h4>
            </div>
            <div>
              Legal Information
              <br />
              Fees
              <br />
            </div>
          </Col>
          <Col span={8}>
            <div style={{ borderBottom: "1px solid white" }}>
              <h4 style={{ color: "white" }}> SUPPORT </h4>
            </div>
            <div>
              <span>Help Center </span>
              <br />
              <span>API Information</span>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ borderBottom: "1px solid white" }}>
              <h4 style={{ color: "white" }}>LANGUAGE</h4>
            </div>
            <div>
              Legal Information
              <br />
              <span>Español </span>
              <br />
              <span>English </span>
              <br />
              <span>Português</span>
            </div>
          </Col>
        </Row>
      </Col>
    </StyledFooterWapper>
  );
}

export default Footer;
