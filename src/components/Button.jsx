import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes {
  label: String;
  backgroundColor: String;
  labelColor: String;
  shape: "circle" | "square";
  borderColor: String;
  borderWidth: Number;
  boderType: "solid" | "none" | "dash";
}
const StyledButton = styled.span`
  font-size: 14px;
  min-width: 100px;
  height: 36px;
  padding: 8px 16px;
  color: ${(props) => props.labelColor};
  border: ${(props) =>
    props.borderWidth + "px " + props.boderType + " " + props.borderColor};
  border-radius: ${(props) => (props.shape === "circle" ? "18px" : "5px")};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Button(props: ButtonProps) {
  const {
    labelColor = "black",
    label = "",
    backgroundColor = "white",
    shape = "circle",
    borderColor = "black",
    borderWidth = 1,
    boderType = "solid",
  } = props;
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      labelColor={labelColor}
      shape={shape}
      borderColor={borderColor}
      borderWidth={borderWidth}
      boderType={boderType}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
