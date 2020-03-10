import React from "react";

export default function Author({ name = "Dave", handle = "@dceddia" }) {
  return (
    <div>
      <span>{name}</span>
      <span>{handle}</span>
    </div>
  );
}
