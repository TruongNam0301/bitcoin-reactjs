import React from "react";
import "antd/dist/antd.css";
import { Row, Table, Col } from "antd";
import styled from "styled-components";

const columns = [
  {
    title: "Price USD",
    dataIndex: "price",
  },
  {
    title: "Amount BTC",
    dataIndex: "amount",
  },
  {
    title: "Value USD",
    dataIndex: "value",
  },
];
const data = [
  {
    key: "1",
    price: "$49,194.56",
    amount: 0.00012012,
    value: "$5.90",
  },
  {
    key: "2",
    price: "$49,194.56	",
    amount: 0.00012012,
    value: "$5.90",
  },
  {
    key: "3",
    price: "$49,194.56	",
    amount: 0.00012012,
    value: "$5.90",
  },
];

const StyleTitleTable = styled.div`
  padding: 10px 15px;
  padding-left: 20px;
  background-color: #d2d6d7;
`;
function recentTrade({ data }) {
  return (
    <Row>
      <Col span={24}>Live Trade</Col>
      <Col>
        <Row>
          <Col span={24}>
            <StyleTitleTable>MOST RECENT TRADES</StyleTitleTable>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default recentTrade;
