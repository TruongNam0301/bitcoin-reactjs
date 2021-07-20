import { Col, Row } from "antd";
import Chart from "./components/Chart";
import MarketStats from "./components/MarketStats";
import RecentTrade from "./components/RecentTrade";
import { useParams } from "react-router-dom";

import React from "react";
import ChartRealtime from "./components/ChartRealtime";
import { data1, data2, data3 } from "./data";
function Index(props) {
  let { id } = useParams();

  return (
    <Row justify="center">
      <Col span={14}>
        <Row gutter={[0, 50]}>
          <Col span={24}>
            <MarketStats name={id} />
          </Col>
          <Col span={24}>
            <ChartRealtime nameCoin={id} dpsProps={0} />
          </Col>
          <Col span={24}>
            <Chart name={id} />
          </Col>
          <Col span={24} style={{ paddingBottom: "40px" }}>
            <Row gutter={[20, 30]}>
              <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                <RecentTrade data={data1}></RecentTrade>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                <RecentTrade data={data2}></RecentTrade>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={8} sm={24}>
                <RecentTrade data={data3}></RecentTrade>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Index;
