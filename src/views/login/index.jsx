import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import FormLogin from "./components/FormLogin";
import LinkLogin from "./components/LinkLogin";

const StyledFormWrap = styled(Row)`
  margin-top: 50px;
`;

function Login(props) {
  return (
    <StyledFormWrap justify="center">
      <Col span="14">
        <Row gutter={[0, 32]}>
          <Col span={24}>
            <LinkLogin />
          </Col>
          <Col span={24}>
            <FormLogin />
          </Col>
        </Row>
      </Col>
    </StyledFormWrap>
  );
}

export default Login;
