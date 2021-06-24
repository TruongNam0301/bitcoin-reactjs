import React from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  background-color: ${(props) => props.backgroundColor};
  padding: 8px;
  border-radius: 50%;
`;
const StyledIconText = styled.span`
  font-size: 20px;
  letter-spacing: 0.15px;
`;

function IconText(props) {
  const { backgroundColor, icon, label, text } = props;
  return (
    <div>
      <div style={{ marginBottom: "21px" }}>
        <div style={{ marginBottom: "21px" }}>
          <StyledIcon src={icon} backgroundColor={backgroundColor} />
        </div>
        <StyledIconText>{label}</StyledIconText>
      </div>
      <span>{text}</span>
    </div>
  );
}

export default IconText;
