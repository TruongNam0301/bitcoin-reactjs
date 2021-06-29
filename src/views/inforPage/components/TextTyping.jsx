import React from "react";
import Typist from "react-typist";
function TextTyping(props) {
  const { label } = props;
  return <Typist>{label}</Typist>;
}

export default TextTyping;
