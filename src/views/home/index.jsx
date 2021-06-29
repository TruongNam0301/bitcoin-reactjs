import { Col, Row } from "antd";
import Chart from "./components/Chart";
import MarketStats from "./components/MarketStats";
import RecentTrade from "./components/RecentTrade";
import { useParams } from "react-router-dom";

import React from "react";
import ChartRealtime from "./components/ChartRealtime";

function Index(props) {
  let { id } = useParams();

  return (
    <Row justify="center">
      <Col span={14}>
        <Row gutter={[0, 50]}>
          <Col span={24}>
            <MarketStats name={id}></MarketStats>
          </Col>
          <Col span={24}>
            <ChartRealtime />
          </Col>
          <Col span={24}>
            <Chart name={id} />
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
