import { Col, Row } from "antd";
import Chart from "./components/Chart";
import MarketStats from "./components/MarketStats";
import RecentTrade from "./components/RecentTrade";
import { useParams } from "react-router-dom";

import React from "react";

function Index(props) {
  let { id } = useParams();
  return (
    <Row justify="center">
      <Col span={14}>
        <Row gutter={[0, 50]}>
          <Col></Col>
          <Col span={24}>
            <MarketStats></MarketStats>
          </Col>
          <Col span={24}>
            <Chart />
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

export default Index;
