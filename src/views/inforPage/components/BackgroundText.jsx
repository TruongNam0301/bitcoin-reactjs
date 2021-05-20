import React from "react";
import styled from "styled-components";

const StyledBackgroundWapper = styled.div`
  height: 520px;
  background: rgb(246, 249, 252);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 19px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StyledBackgroundImage = styled.div`
  background: url('https://assets.bitso.com/static/media/app.a16b8f00.png')
    center center / contain no-repeat;
  height: 201px;
  width: 258px;
  padding-top: 134px;
`;

function BackgroundText(props) {
  return (
    <StyledBackgroundWapper>
      <div style={{ margin: "69px 64px 0px" }}>
        <div>MONEY WITHOUT BORDERS</div>
        <div>Bitso</div>
        <div>
          Join the crypto world. Learn how to use bitcoin and altcoins. Download
          the app on iOS or Android.
        </div>
        <a>Learn more</a>
      </div>
      <StyledBackgroundImage>
        <div style={{ textAlign: "center" }}>Great! </div>
        <div style={{ textAlign: "center" }}>Now you have 0.02379 BTC</div>
      </StyledBackgroundImage>
    </StyledBackgroundWapper>
  );
}

export default BackgroundText;
