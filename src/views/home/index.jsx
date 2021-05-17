import { Col, Row } from "antd";
import React, { Component } from "react";
import MarketStats from "./components/MarketStats";
import RecentTrade from "./components/RecentTrade";

class example extends Component {
  render() {
    return (
      <Row justify="center">
        <Col span={14}>
          <Row gutter={[0, 50]}>
            <Col span={24}>
              <MarketStats></MarketStats>
            </Col>
            <Col span={24}>
              <Row gutter={[20, 30]}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                  <RecentTrade></RecentTrade>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                  <RecentTrade></RecentTrade>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                  <RecentTrade></RecentTrade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default example;
