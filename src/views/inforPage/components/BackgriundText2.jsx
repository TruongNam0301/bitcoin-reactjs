import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledBackgroundWapper = styled(Row)`
  background-color: rgb(78, 188, 66);
  /* background: rgb(246, 249, 252); */
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 19px 0px;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 19px 0px !important;
`;

function BackgroundText2(props) {
  return (
    <StyledBackgroundWapper>
      <Col span={12} style={{ padding: "69px 64px" }}>
        <div style={{ marginBottom: "16px" }}>AVAILABLE IN THE APP AND WEB</div>
        <div style={{ marginBottom: "15px" }}>Bitso Transfer</div>
        <div style={{ marginBottom: "18px" }}>
          Send and receive money between friends. Fast and easy, without any
          fees.
        </div>
        <a>Learn more</a>
      </Col>

      <Col span={12}>
        <div
          style={{
            width: "328px",
            height: "132px",
            padding: "20px 28px",
            zIndex: 10,
            position: "absolute",
            top: "48px",
            right: "140px",
            left: "auto",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
            boxShadow: "rgb(0 0 0 / 6%) 0px 2px 19px 0px",
          }}
        >
          <div>
            <img
              src="https://assets.bitso.com/static/media/avatar.d3bc0d26.png"
              width="42px"
              height="42px"
            />
            <span>YOU RECEIVRD 25USD</span>
            <div>Thanks for the meal. It was awesome seeing you</div>
          </div>
        </div>
        <div
          style={{
            width: "328px",
            height: "132px",
            padding: "20px 28px",
            zIndex: 12,
            position: "absolute",
            top: "160px",
            right: "60px",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
            boxShadow: "rgb(0 0 0 / 6%) 0px 2px 19px 0px",
          }}
        >
          <div>
            <img
              src="https://img.icons8.com/color/32/000000/bitcoin--v1.png"
              width="42px"
              height="42px"
            />
            <span>YOU RECEIVRD 25USD</span>
            <div>Thanks for the meal. It was awesome seeing you</div>
          </div>
        </div>
        <img
          src="https://assets.bitso.com/static/media/emoji1.d3cc48f3.png"
          width="546px"
        />
      </Col>
    </StyledBackgroundWapper>
  );
}

export default BackgroundText2;
