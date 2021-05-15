import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

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
function MarketStats() {
  return (
    <PageContainer>
      <Row justify="center">
        <Col span={14}>
          <Row>
            <Col span={12}>
              <PageLabel>BITCOIN TO US DOLLARS (BTC/ USD)</PageLabel>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={18}>
              <StatusWrapper>
                <StatusContainer>
                  <Col span={8}>
                    <AllDayStatusContainer>
                      <StatusItemContainer>
                        <StatusLabel>24 Hour Volume </StatusLabel>
                        <StatusValue>$49,803.70 USD </StatusValue>
                      </StatusItemContainer>
                    </AllDayStatusContainer>
                  </Col>

                  <Col span={8}>
                    <Row wrap gutter={[0, 40]}>
                      <StatusItemContainer>
                        <StatusLabel>High</StatusLabel>
                        <Col span={24}>
                          <StatusValue>$49,803.70 USD </StatusValue>{" "}
                        </Col>
                      </StatusItemContainer>
                      <StatusItemContainer>
                        <StatusLabel>High</StatusLabel>
                        <Col span={24}>
                          <StatusValue>$49,803.70 USD </StatusValue>{" "}
                        </Col>
                      </StatusItemContainer>
                    </Row>
                  </Col>

                  <Col span={8}>
                    <Row wrap gutter={[0, 40]}>
                      <StatusItemContainer>
                        <StatusLabel>High</StatusLabel>
                        <Col span={24}>
                          <StatusValue>$49,803.70 USD </StatusValue>
                        </Col>
                      </StatusItemContainer>
                      <StatusItemContainer>
                        <StatusLabel>High</StatusLabel>
                        <Col span={24}>
                          <StatusValue>$49,803.70 USD </StatusValue>{" "}
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
                    <LastTradeValue>$49,432.23 USD</LastTradeValue>
                  </Row>
                </Col>
              </StyledTradeBorder>
            </StyledTrade>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
}

export default MarketStats;
