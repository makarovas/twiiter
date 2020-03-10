import React from "react";

export default function Author({ name = "Dave", email = "@dceddia" }) {
  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
}
