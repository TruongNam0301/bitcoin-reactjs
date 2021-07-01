import React, { useState, useEffect } from "react";
import exchangeInforApi from "./../../api/exchangeInforApi";
import CoinInfor from "./components/CoinInfor";
import { Row, Col } from "antd";
import styled from "styled-components";
//import market from "./data";
const StyledContainer = styled(Row)`
  margin: 70px 0 70px 0;
`;
function About(props) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await exchangeInforApi.get();
    setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StyledContainer justify="center">
      <Col span={14}>
        <Row justify="center" gutter={[0, 30]}>
          {data.map((info, index) => {
            return (
              <Col span={12} key={index}>
                <CoinInfor info={info} url={`/about/${info.id}`} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </StyledContainer>
  );
}

export default About;
