import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Row, Col, Spin } from "antd";
import holcToday from "../../../api/holcTodayApi";

const StyledTrade = styled(Col)`
  background-color: #ffff;
  padding: 2px;
`;
const StyledTradeBorder = styled(Row)`
  border-bottom: 2px solid #4ebd43;
  height: 100%;
`;
const PageContainer = styled.div`
  padding-top: 56px;
`;
const PageLabel = styled.span`
  font-weight: 500;
  color: #4f5051;
  font-size: 18px;
`;

const AllDayStatusContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
`;
const StatusLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #4ebd43;
  margin: 0;
`;
const StatusValue = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4f5051;
  margin: 0;
`;
const StatusWrapper = styled.div`
  height: 160px;
  width: 100%;
  background-color: #f6f9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const StatusContainer = styled(Row)`
  width: 100%;
`;
const StatusItemContainer = styled.div`
  padding: 0;
  width: 100%;
  align-self: center;
`;
const LastTradeValue = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #4f5051;
`;

function MarketStats({ name }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const fetch = useCallback(async () => {
    setIsLoaded(false);
    const response = await holcToday.get(name);
    setData(response.data.data);
    setIsLoaded(true);
  }, [name]);

  useEffect(() => {
    fetch();
  }, [fetch]);
  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <PageContainer>
      <Row justify="center" gutter={[0, 15]}>
        {isLoaded ? (
          <>
            <Col span={24}>
              <Row>
                <Col span={24}>
                  <img
                    src={data.logo_url}
                    alt="logo"
                    width="50px"
                    height="50px"
                  />
                  <PageLabel>
                    {data.name.toUpperCase()} TO US DOLLARS (BTC/ USD)
                  </PageLabel>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={18}>
                  <StatusWrapper>
                    <StatusContainer>
                      <Col span={8}>
                        <AllDayStatusContainer>
                          <StatusItemContainer>
                            <StatusLabel>24 Hour Volume </StatusLabel>
                            <StatusValue>
                              {formatPrice(data.volume)}
                            </StatusValue>
                          </StatusItemContainer>
                        </AllDayStatusContainer>
                      </Col>
                      <Col span={8}>
                        <Row wrap gutter={[0, 20]}>
                          <StatusItemContainer>
                            <StatusLabel>High</StatusLabel>
                            <Col span={24}>
                              <StatusValue>
                                {formatPrice(data.high)}
                              </StatusValue>
                            </Col>
                          </StatusItemContainer>
                          <StatusItemContainer>
                            <StatusLabel>Low</StatusLabel>
                            <Col span={24}>
                              <StatusValue>{formatPrice(data.low)}</StatusValue>
                            </Col>
                          </StatusItemContainer>
                        </Row>
                      </Col>

                      <Col span={8}>
                        <Row wrap gutter={[0, 20]}>
                          <StatusItemContainer>
                            <StatusLabel>Open</StatusLabel>
                            <Col span={24}>
                              <StatusValue>
                                {formatPrice(data.open)}
                              </StatusValue>
                            </Col>
                          </StatusItemContainer>
                          <StatusItemContainer>
                            <StatusLabel>Close</StatusLabel>
                            <Col span={24}>
                              <StatusValue>
                                {formatPrice(data.close)}
                              </StatusValue>
                            </Col>
                          </StatusItemContainer>
                        </Row>
                      </Col>
                    </StatusContainer>
                  </StatusWrapper>
                </Col>
                <StyledTrade span={6}>
                  <StyledTradeBorder align="center" justify="center">
                    <Col span={24}>
                      <Row align="center" justify="center">
                        <StatusLabel>Last trade</StatusLabel>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row align="center" justify="center">
                        <LastTradeValue>
                          {formatPrice(data.high)}
                        </LastTradeValue>
                      </Row>
                    </Col>
                  </StyledTradeBorder>
                </StyledTrade>
              </Row>
            </Col>
          </>
        ) : (
          <Spin tip="Loading..."></Spin>
        )}
      </Row>
    </PageContainer>
  );
}

export default MarketStats;
