import { Row, Col } from "antd";
import React from "react";
import styled from "styled-components";

const StyledWapper = styled(Col)`
  padding: 12px 24px;
  box-shadow: rgb(175 188 198 / 40%) 0px 0px 6px;
  border-radius: 8px;
`;
const StyledLock = styled.div`
  height: 48px;
  width: 48px;
  background-color: rgb(241, 250, 241);
  padding: 10px;
  border-radius: 50%;
`;
const StyledContent = styled.div`
  font-size: 13px;
  letter-spacing: 0.1px;
`;
function LinkLogin() {
  return (
    <Row justify="center" style={{ margin: "32px 0" }}>
      <StyledWapper span={9}>
        <Row justify="center" align="middle" gutter={[20, 0]}>
          <Col span={4}>
            <StyledLock>
              <img
                src="https://img.icons8.com/material-outlined/28/29AC00/lock--v1.png"
                alt="lock"
              />
            </StyledLock>
          </Col>
          <Col span={20}>
            <StyledContent>
              Avoid fraud by checking you're at the right URL
              <a href="/login"> https://bitso.com/login</a>
            </StyledContent>
          </Col>
        </Row>
      </StyledWapper>
    </Row>
  );
}

export default LinkLogin;
