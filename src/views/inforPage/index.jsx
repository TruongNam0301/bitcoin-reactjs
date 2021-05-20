import React from "react";
import { Row, Col } from "antd";
import Banner from "./components/Banner";
import IntroContent from "./components/IntroContent";
import IconText from "./components/IconText";
import BackgroundText from "./components/BackgroundText";

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
          <Col span={24}>
            <Row gutter={[44, 0]}>
              <Col span={8}>
                <IconText
                  icon="https://img.icons8.com/cotton/32/000000/earth-planet--v2.png"
                  label="Operate within seconds around the world"
                  text="Send and receive cryptocurrencies between friends from all over the
            globe."
                />
              </Col>
              <Col span={8}>
                <IconText
                  icon="https://img.icons8.com/color/32/000000/bitcoin--v1.png"
                  label="Operate within seconds around the world"
                  text="Send and receive cryptocurrencies between friends from all over the
            globe."
                />
              </Col>
              <Col span={8}>
                <IconText
                  icon="https://img.icons8.com/windows/32/000000/us-dollar--v1.png"
                  label=" Operate within seconds around the world"
                  text="Send and receive cryptocurrencies between friends from all over the
            globe."
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[10,0]}>
              <Col span={12}>
                <BackgroundText />
              </Col>
              <Col span={12}>
                <BackgroundText />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default index;
