import React from "react";
import { Row, Col } from "antd";
import Banner from "./components/Banner";
import IntroContent from "./components/IntroContent";
import IconText from "./components/IconText";
import BackgroundText from "./components/BackgroundText";
import styled from "styled-components";
import BackgroundText2 from "./components/BackgriundText2";
import SignText from "./components/SignText";
import HotCoinTable from "./components/HotCoinTable";
import { withRouter } from "react-router-dom";
const StyledIconRow = styled(Row)`
  margin-bottom: 106px;
`;

function index(props) {
  return (
    <Row justify="center">
      <Col span={14}>
        <Row justify="center">
          <Col span={24}>
            <Banner />
          </Col>
          <Col span={22}>
            <IntroContent />
          </Col>
          <Col span={22}>
            <HotCoinTable />
          </Col>
          <Col span={24}>
            <StyledIconRow gutter={[44, 0]}>
              <Col span={8}>
                <IconText
                  backgroundColor="rgb(108, 190, 245);"
                  icon="https://img.icons8.com/cotton/32/000000/earth-planet--v2.png"
                  label="Operate within seconds around the world"
                  text="Send and receive cryptocurrencies between friends from all over the
            globe."
                />
              </Col>
              <Col span={8}>
                <IconText
                  backgroundColor="rgb(255, 211, 64)"
                  icon="https://img.icons8.com/color/32/000000/bitcoin--v1.png"
                  label="Operate within seconds around the world"
                  text="Send and receive cryptocurrencies between friends from all over the
            globe."
                />
              </Col>
              <Col span={8}>
                <IconText
                  backgroundColor="rgb(255, 113, 113)"
                  icon="https://img.icons8.com/windows/32/000000/us-dollar--v1.png"
                  label=" Operate within seconds around the world"
                  text="Send and receive cryptocurrencies between friends from all over the
            globe."
                />
              </Col>
            </StyledIconRow>
          </Col>
          <Col span={24}>
            <Row gutter={[20, 20]}>
              <Col span={12}>
                <BackgroundText
                  backgroundUrl="https://assets.bitso.com/static/media/app.a16b8f00.png"
                  backgroundColor="rgb(246, 249, 252)"
                  colorFont="black"
                  label="MONEY WITHOUT BORDERS"
                  name="Bitso"
                  description="Join the crypto world. Learn how to use bitcoin and altcoins. Download the app on iOS or Android."
                >
                  <div style={{ textAlign: "center" }}>Great! </div>
                  <div style={{ textAlign: "center" }}>
                    Now you have 0.02379 BTC
                  </div>
                </BackgroundText>
              </Col>
              <Col span={12}>
                <BackgroundText
                  backgroundUrl="https://assets.bitso.com/static/media/alpha.85594308.png"
                  backgroundColor="rgb(22, 26, 30)"
                  colorFont="white"
                  label="MONEY WITHOUT BORDERS"
                  name="Bitso"
                  description="Join the crypto world. Learn how to use bitcoin and altcoins. Download the app on iOS or Android."
                ></BackgroundText>
              </Col>
              <Col span={24}>
                <BackgroundText2></BackgroundText2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={20}>
            <Row justify="space-around" gutter={[30, 30]}>
              <Col span={12}>
                <div style={{ fontSize: "36px", marginTop: "57px" }}>
                  We make crypto easy. Sign up and get started in minutes.
                </div>
              </Col>
              <Col span={12}>
                <SignText
                  number="1"
                  label="CREATE YOUR ACCOUNT"
                  content="Sign up on our website or download the app."
                />
                <SignText
                  number="2"
                  label="MAKE A DEPOSIT"
                  content="Transfer money from your bank or send a stablecoin into your Bitso account."
                />
                <SignText
                  number="3"
                  label="SAVE, BUY AND SELL"
                  content="Your local currency, bitcoin and other crypto. Use it however you want."
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default withRouter(index);
