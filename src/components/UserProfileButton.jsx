/* eslint-disable react/prop-types */
import React from "react";
import { useStateContext } from "../contexts/Provider";

export const UserProfileButton = ({
  color,
  bgColor,
  size,
  text,
  borderRadius,
  opt,
}) => {
  const { handleClick } = useStateContext();

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={() => handleClick(opt)}
    >
      {text}
    </button>
  );
};
