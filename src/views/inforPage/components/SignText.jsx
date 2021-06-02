import React from "react";
import styled from "styled-components";
const StyledWapper = styled.div`
  margin-top: 57px;
  display: flex;
  flex-direction: row;
`;
const StyledNum = styled.div`
  font-size: 30px;
  height: 38px;
  width: 38px;
  background-color: rgb(246, 249, 252);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLabel = styled.div`
  margin: 11px 0 18px 0;
  font-size: 12px;
  font-weight: bold;
`;
const StyledContent = styled.div`
  font-size: 18px;
`;
function SignText(props) {
  return (
    <div>
      <StyledWapper>
        <div style={{ marginRight: "15px" }}>
          <StyledNum>{props.number}</StyledNum>
        </div>
        <div>
          <StyledLabel>{props.label}</StyledLabel>
          <StyledContent>{props.content}.</StyledContent>
        </div>
      </StyledWapper>
    </div>
  );
}

export default SignText;
