import React from "react";
import { Dropdown, Menu, Col } from "antd";
// import { DownOutlined } from "@ant-design/icons";
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
  font-size: 12px;
`;
const MenuItem = (props) => {
  return (
    <Menu.Item key="0">
      <StyledMenu span={6}>
        <StyledLabelItems>
          <span>Mexican Peso Markets</span>
        </StyledLabelItems>
        <Menu.Item {...props} key="1">
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
    </Menu.Item>
  );
};
const menu = (
  <Menu
    style={{
      width: "50vw",
      overflow: "hidden",
    }}
  >
    <MenuItem />
  </Menu>
);
const StyledDropdown = styled.div``;

const StyledDropdownOpen = styled(Dropdown)`
  float: right;
  cursor: pointer;
  font-size: 18px;
  padding: 0 5px;
`;

function DropDownMenu(props) {
  return (
    <StyledDropdownOpen
      overlay={menu}
      placement={props.placement}
      trigger={[props.trigger]}
    >
      <StyledDropdown>{props.children}</StyledDropdown>
    </StyledDropdownOpen>
  );
}

export default DropDownMenu;
