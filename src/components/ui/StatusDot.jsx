import React from "react";

const StatusDot = ({ type }) => {
  return (
    <div
      className={`size-3 ${
        type === "active" ? "bg-blue-400" : "bg-violet-600"
      } rounded-full`}
    ></div>
  );
};

export default StatusDot;
