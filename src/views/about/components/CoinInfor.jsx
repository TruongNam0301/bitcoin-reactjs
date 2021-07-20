import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;
const StyledCard = styled(Card)`
  border: 1px solid rgb(78, 188, 66);
`;
const StyledSpan = styled.span`
  color: #4785c0;
  cursor: pointer;
`;
function CoinInfor(props) {
  const [isHover, setIsHover] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const { info, url } = props;
  return (
    <StyledCard
      hoverable
      style={{ width: 400, height: "auto" }}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      extra={<Link to={url}>More</Link>}
    >
      {isHover === true ? (
        <Meta
          avatar={<img alt="example" src={info.image} />}
          title={info.name}
          description={
            <p>
              {isReadMore ? info.description : info.description.slice(0, 130)}
              <StyledSpan onClick={toggleReadMore}>
                {info.description.length > 150
                  ? isReadMore
                    ? " show less"
                    : "...read more"
                  : ""}
              </StyledSpan>
            </p>
          }
        />
      ) : (
        <Meta
          avatar={<img alt="example" src={info.image} />}
          title={info.name}
          description={
            <div>
              <span>{info.country}</span>
              <br />
              <span>{info.year_established}</span>
              <br />
              <span>{info.url}</span>
            </div>
          }
        />
      )}
    </StyledCard>
  );
}

export default CoinInfor;
