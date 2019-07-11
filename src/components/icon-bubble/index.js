import React from "react";
import { Blue } from "@hbsis.uikit/react";

export const IconBubble = ({ children }) => (
  <span
    style={{
      minWidth: 40,
      height: 40,
      display: "flex",
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Blue.semiLight
    }}
  >
    {children}
  </span>
);
