import React from "react";
import { Menu, Row, Col } from "antd";
import styled from "styled-components";

const StyledCoinInfor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

function MenuItem(props) {
  const { iconUrl, nameCoin, priceCoin, percent } = props;
  return (
    <StyledCoinInfor>
      <div>
        <img src={iconUrl} width="32px" height="32px" />
        <span>{nameCoin}</span>
      </div>
      <Row gutter={[10, 0]}>
        <Col>{priceCoin}</Col>
        <Col>{percent}</Col>
      </Row>
    </StyledCoinInfor>
  );
}

export default MenuItem;
