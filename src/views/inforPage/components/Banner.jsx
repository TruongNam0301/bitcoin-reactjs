import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import styled, { keyframes } from "styled-components";
import backgroundBanner from "../../../assets/background/download.png";
import Button from "../../../components/Button";

const StyledBackground = styled(Col)`
  margin-top: 50px;
  background: url(${backgroundBanner}) 0% 0% / 14px repeat;
  height: 604px;
  margin-bottom: 68px;
`;
const StyledLabelBanner = styled(Row)`
  height: 100%;
  padding: 0 64px;
`;
const StyledDesBanner = styled.div`
  font-size: 15px;
  color: rgb(37, 44, 54);
  margin-bottom: 30px;
`;
const StyledBoldBanner = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 0.55px;
  color: rgb(37, 44, 54);
  margin-bottom: 9px;
  text-transform: uppercase;
`;
const StyledAnimationBanner = styled.h1`
  font-size: 56px;
  font-weight: 100;
  color: rgb(37, 44, 54);
`;

const StyledAnimate = styled.span`
  color: tomato;
  position: relative;
  bottom: -1em;
  opacity: 0;
`;
const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding-right: 33px;
  position: relative;
  z-index: 1;
`;
const StyledForm = styled.form`
  height: 60px;
  background-color: white;
`;
const StylesLabelInput = styled.label`
  position: relative;
  top: ${(props) => props.emaillabel};
  transition: 500ms;
`;
const labels = ["dolars", "bitcoin", "trueUSD"];
const lastIndex = labels.length - 1;

function Banner(props) {
  const [label, setLabel] = useState("dolars");
  const [emaillabel, setEmailLabel] = useState("26px");
  useEffect(() => {
    const intervalId = setInterval(() => {
      let index = labels.indexOf(label);
      setLabel(index === lastIndex ? labels[0] : labels[index + 1]);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [label]);

  const handelEmail = (e) => {
    if (e.target.value.length > 0) {
      setEmailLabel("0");
    } else {
      setEmailLabel("26px");
    }
  };
  
  return (
    <div>
      <Row justify="center" align="middle">
        <StyledBackground span={24}>
          <StyledLabelBanner align="middle">
            <Col span={12}>
              <div>
                <StyledAnimationBanner>
                  Send
                  <span>
                    {label.split("").map(function (char, index) {
                      let style = { animationDelay: 0.5 + index / 10 + "s" };
                      return (
                        <StyledAnimate
                          aria-hidden="true"
                          key={index}
                          style={style}
                        >
                          {char}
                        </StyledAnimate>
                      );
                    })}
                  </span>
                  <br /> <span>free your money</span>
                </StyledAnimationBanner>
              </div>
              <StyledDesBanner>
                Buy and sell bitcoin or 8 other cryptocurrencies and store them
                all in one place.
              </StyledDesBanner>
              <StyledBoldBanner>
                YOUR GATEWAY TO THE GLOBAL ECONOMY
              </StyledBoldBanner>
              <StyledForm>
                <Row align="middle" gutter={[20, 0]}>
                  <Col>
                    <StylesLabelInput emaillabel={emaillabel}>
                      your email
                    </StylesLabelInput>
                    <StyledInput
                      type="text"
                      placeholder="your@email.com"
                      onChange={handelEmail}
                    />
                  </Col>
                  <Col>
                    <Button
                      labelColor="white"
                      label="CREATE AN ACCOUNT"
                      borderColor="#4ebc42"
                      borderWidth={1}
                      backgroundColor="#4ebc42"
                      shape="circle"
                    />
                  </Col>
                </Row>
              </StyledForm>
            </Col>
            <Col span={12}></Col>
          </StyledLabelBanner>
        </StyledBackground>
      </Row>
    </div>
  );
}

export default Banner;
