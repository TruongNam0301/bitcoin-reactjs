import React from "react";
import { Dropdown, Menu, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const menu = (
  <Menu
    style={{
      width: "50vw",
      overflow: "hidden",
    }}
  >
    <Row gutter={[20, 10]} style={{ padding: "0 32px" }}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Row>
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
      <StyledDropdown>
        {props.children}
        {/* <span> MARKET </span>
        <StypedPriceBanner> BTC/USD </StypedPriceBanner>
        <span>
          <DownOutlined />
        </span> */}
      </StyledDropdown>
    </StyledDropdownOpen>
  );
}

export default DropDownMenu;
