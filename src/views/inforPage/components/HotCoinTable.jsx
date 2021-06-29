import React, { useEffect, useState } from "react";
import { Table } from "antd";
import styled from "styled-components";
import topHotCoin from "../../../api/topHotCoin";
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
    title: "Number",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Icon",
    dataIndex: "thumb",
    key: "thumb",
    render: (theImageURL) => (
      <img
        alt={theImageURL}
        src={theImageURL}
        style={{ width: "25px", height: "25px" }}
      />
    ),
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Market Rank",
    dataIndex: "market_cap_rank",
    key: "market_cap_rank",
  },
];
function HotCoinTable(props) {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await topHotCoin.get();
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <StyledTitle>
      <Table
        rowKey="score"
        columns={columns}
        pagination={{ position: ["none"] }}
        dataSource={data}
        title={() => <p>Top Hot Coin</p>}
      />
    </StyledTitle>
  );
}

export default HotCoinTable;
