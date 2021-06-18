import React from "react";
import "./Body.css";
import { useDataLayerValue } from "../DataLayer";
import Header from "./Header";

function Body() {
  const [{ spotify }] = useDataLayerValue();
  return (
    <div className="body">
      <Header />
      <h1>Body Here!!</h1>
    </div>
  );
}

export default Body;
