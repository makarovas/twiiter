import React from "react";
import Logo from "./Avatar/Logo";
import Author from "./Author";
import Time from "./Time";
import Message from "./Message";
import {
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
} from "./ReplyButton";

export default function TweetPage() {
  const PAGE_STYLE = {
    height: "100px",
    width: "400px",
    border: "1px solid black",
    padding: "10px ",
    display: "flex"
  };

  const FLEX_COLUMNS = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  };
  const FLEX_ROW = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  };

  return (
    <div style={PAGE_STYLE}>
      <Logo />
      <div style={FLEX_COLUMNS}>
        <Author />
        <Time />
        <Message />
        <div style={FLEX_ROW}>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}
