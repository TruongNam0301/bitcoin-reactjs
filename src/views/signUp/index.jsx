import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import SignUpForm from "./components/SignUpForm";

const StyledBackGround = styled(Row)`
  width: 100%;
  height: 1200px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://assets.bitso.com/static/media/RegisterIllustrationTablet.0fb71f6b.png");
  background-attachment: fixed;
`;
function SignUp(props) {
  return (
    <StyledBackGround justify="center">
      <Col span={14}>
        <SignUpForm />
      </Col>
    </StyledBackGround>
  );
}

export default SignUp;
