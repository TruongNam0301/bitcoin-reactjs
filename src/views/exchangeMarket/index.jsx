import React from "react";
import { useParams } from "react-router-dom";
import TableExchange from "./components/TableExchange";

function Index(props) {
  const { id } = useParams();
  return <TableExchange id={id} />;
}

export default Index;
