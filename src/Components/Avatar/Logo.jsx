import React from "react";
import Logo from "./img/Logo.svg";
const LOGO_STYLES = {
  width: "100px",
  height: "100px",
  marginRight: "10px"
};
export default function Avatar() {
  return (
    <div style={LOGO_STYLES}>
      <img src={Logo} alt="tweeter icon" />
    </div>
  );
}
