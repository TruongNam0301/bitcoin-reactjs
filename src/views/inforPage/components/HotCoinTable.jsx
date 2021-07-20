import React, { useEffect, useState } from "react";
import { Table } from "antd";
import styled from "styled-components";
import topHotCoin from "../../../api/topHotCoin";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
//import useSaveLink from "../../../hooks/useSaveLinkDownExCel";

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

//const url = process.env.REACT_APP_API_UR;
function HotCoinTable(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await topHotCoin.get();
      console.log(response);
      setData(response.data.data);
    }
    fetchData();
  }, []);
  // const link =  useSaveLink("csv/statistic_trending_last_month");

  return (
    <StyledTitle>
      <Table
        rowKey="score"
        columns={columns}
        pagination={{ position: ["none"] }}
        dataSource={data}
        title={() => (
          <>
            <p>Top Hot Coin</p>
            <a>
              <Button
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size="large"
              >
                Download
              </Button>
            </a>
          </>
        )}
      />
    </StyledTitle>
  );
}

export default HotCoinTable;
