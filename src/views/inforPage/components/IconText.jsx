import React from 'react';
import styled from "styled-components";

const StyledIcon = styled.img`
  background-color: rgb(108, 190, 245);
  padding: 8px;
  border-radius: 50%;
`;
const StyledIconText = styled.span`
  font-size: 20px;
  letter-spacing: 0.15px;
`;

function IconText(props) {
    return (
        <div>
          <div style={{ marginBottom: "21px" }}>
            <div style={{ marginBottom: "21px" }}>
              <StyledIcon src={props.icon}/>
            </div>
            <StyledIconText>
                {props.label}
            </StyledIconText>
          </div>
          <span>
              {props.text}
          </span>
        </div>
        
    );
}

export default IconText;