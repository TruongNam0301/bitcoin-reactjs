import React from "react";
import styled from "styled-components";

const StyledBackgroundWapper = styled.div`
  height: 520px;
  background-color: ${(props) => props.backgroundColor};
  /* background: rgb(246, 249, 252); */
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 19px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.colorFont};
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 19px 0px !important;
`;
const StyledBackgroundImage = styled.div`
  height: 201px;
  width: 258px;
  padding-top: 134px;
`;

function BackgroundText(props) {
  const { backgroundUrl, backgroundColor, colorFont } = props;
  return (
    <StyledBackgroundWapper
      backgroundUrl={backgroundUrl}
      backgroundColor={backgroundColor}
      colorFont={colorFont}
    >
      <div style={{ margin: "69px 64px 0px" }}>
        <div style={{ marginBottom: "16px" }}>{props.label}</div>
        <div style={{ marginBottom: "15px" }}>{props.name}</div>
        <div style={{ marginBottom: "18px" }}>{props.description}</div>
        <a href="/">Learn more</a>
      </div>
      <StyledBackgroundImage
        style={{
          background: `url(${backgroundUrl}) center center/ contain no-repeat`,
        }}
      >
        {props.children}
      </StyledBackgroundImage>
    </StyledBackgroundWapper>
  );
}

export default BackgroundText;
