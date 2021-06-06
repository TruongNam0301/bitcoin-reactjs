import { Row, Col } from "antd";
import React from "react";
import Infor from "./Infor";

function Footer2(props) {
  return (
    <div>
      <Row justify="center">
        <Col span={14}>
          <Row>
            <Col span={4}>
              <div>Bitso</div>
            </Col>
            <Col span={5}>
              <Infor title="Companny">
                <div>home</div>
                <div>home</div>
              </Infor>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer2;
