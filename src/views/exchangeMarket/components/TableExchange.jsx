import React, { useState, useEffect } from "react";
import { Table, Row, Col } from "antd";
//import data from "./data";

import styled from "styled-components";
import exchangeInForDetail from "../../../api/exchangeInforDetailApi";
const StyledTitle = styled.div`
  & .ant-table-title {
    text-align: center;
    font-size: 24px;
  }
  margin-bottom: 100px;
  & .ant-table-thead > th {
    background-color: green !important;
  }
`;
const columns = [
  {
    title: "image",
    dataIndex: "image",
    key: "image",
    render: (theImageURL) => (
      <img
        alt={theImageURL}
        src={theImageURL}
        style={{ width: "25px", height: "25px" }}
      />
    ),
  },
  {
    title: "coin",
    dataIndex: "coin",
    key: "coin",
  },
  {
    title: "volume",
    dataIndex: "volume",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    key: "volume",
  },
  {
    title: "last",
    dataIndex: "last",
    key: "last",
  },
  {
    title: "bid_ask_spread_percentage",
    dataIndex: "bid_ask_spread_percentage",
    key: "bid_ask_spread_percentage",
  },
];

function TableExchange({ id }) {
  const [arrData, setArrData] = useState("");

  const fetch = async (id) => {
    const response = await exchangeInForDetail.get(id);
    setArrData(response.data.data);
  };
  useEffect(() => {
    fetch(id);
  }, [id]);

  return (
    <StyledTitle style={{ marginTop: "60px" }}>
      <Row justify="center">
        <Col span={14}>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={arrData}
            title={() => <p>Information of {id} Exchange Market</p>}
            loading={arrData ? false : true}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  const url = record.url_chart;
                  window.open(url);
                }, // click row
              };
            }}
          />
        </Col>
      </Row>
    </StyledTitle>
  );
}

export default TableExchange;
