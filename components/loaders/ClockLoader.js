import React from "react";
import { ClockLoader } from "react-spinners";

export const ClockSpinner = ({ loading }) => {
  return (
    <div className="top-0 bottom-0 left-0 right-0 grid place-items-center bg-[rgba(255,255,255,0.6)] fixed z-[90]">
      <ClockLoader color="#36d7b7" size={100} />
    </div>
  );
};
