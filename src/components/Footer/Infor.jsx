import React from "react";

function Infor(props) {
  const { title } = props;
  return (
    <div>
      <div>{title}</div>
      <div>{props.children}</div>
    </div>
  );
}

export default Infor;
