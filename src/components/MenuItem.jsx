import React from "react";
import { Menu, Row, Col } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Col)`
  width: 200px;
  padding: 24px 16px;
`;
const StyledLabelItems = styled.div`
  color: #4ebd43;
  border-bottom: 1px solid #4ebd43;
  padding-bottom: 10px;
`;
const StyledMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 7px;
  align-items: center;
  border-bottom: 1px solid #ebf1f8;
`;
const StyledPrice = styled.span`
font-size:12px;
`
function MenuItem(props) {
  return (
    <StyledMenu span={6}>
      <StyledLabelItems>
        <span>Mexican Peso Markets</span>
      </StyledLabelItems>
      <Menu.Item key="0">
        <StyledMenuItem>
          <span>BTC/MXN</span>
          <StyledPrice>$879,074.18</StyledPrice>
        </StyledMenuItem>
        <StyledMenuItem>
          <span>BTC/MXN</span>
          <StyledPrice>$879,074.18</StyledPrice>
        </StyledMenuItem>
      </Menu.Item>
    </StyledMenu>
  );
}

export default MenuItem;
