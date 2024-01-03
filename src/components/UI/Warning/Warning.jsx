import React from "react";
import WarningIcon from "../../../assets/warning.svg";

export const Warning = () => {
  return (
    <div className="relative h-20 bg-[#FAECEB] w-full flex items-center">
      <img
        src={WarningIcon}
        alt="warning"
        className="absolute left-3  c bottom-0"
      />
      <div className="ml-28">
        <p className="text-[#96302A] text-lg font-bold">Amount Not Declared</p>
        <p className="text-[#C84038] font-medium">
          You will miss out on lot of tax benifits
        </p>
      </div>
    </div>
  );
};
