import React from "react";

export function CashButton({ balance = 0 }) {
  return (
    <div>
      <i className="fas fa-dollar-sign reply-button" />
      <span style={{ display: "inline-block", marginLeft: "10px" }}>
        {balance ? balance : 0}
      </span>
    </div>
  );
}

export function RetweetButton({ balance = 0 }) {
  return <i className="fas fa-retweet retweet-button" />;
}

export function LikeButton({ count = 0 }) {
  return <i className="fas fa-heart like-button" />;
}

export function MoreOptionsButton({ count = 0 }) {
  return <i className="fas fa-ellipsis-h more-options-button" />;
}
