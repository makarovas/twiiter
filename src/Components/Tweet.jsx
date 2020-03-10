import React from "react";
import Logo from "./Avatar/Logo";
import Author from "./Author";
import Time from "./Time";
import Message from "./Message";
import moment from "moment";
import {
  CashButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
} from "./Buttons";

export default function Tweet({ tweet }) {
  const PAGE_STYLE = {
    height: "100px",
    width: "500px",
    border: "1px solid black",
    padding: "10px ",
    display: "flex"
  };

  const FLEX_COLUMNS = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    maxWidth: "300px"
  };
  const FLEX_ROW = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  };

  return (
    <ul>
      {tweet.map(({ name, greeting, email, registered, balance }, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          <div style={PAGE_STYLE}>
            <Logo />
            <div style={FLEX_COLUMNS}>
              <Author name={name} email={email} />
              <Time time={registered} />
              <Message messages={greeting} />
              <div style={FLEX_ROW}>
                <CashButton balance={balance} />
                <RetweetButton />
                <LikeButton />
                <MoreOptionsButton />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
