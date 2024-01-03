import React from "react";
import { Warning } from "../UI/Warning/Warning";
import AmountCard from "../UI/AmountCard/AmountCard";
import StackGreen from "../../assets/coins-stacked-green.svg";
import StackBlue from "../../assets/coins-stacked-blue.svg";

export const DeclarationInfo = () => {
  return (
    <div className="w-full">
      <Warning />

      <div className="mt-6 px-8">
        <p className="text-2xl font-bold text-[#344054]">Declaration</p>
        <p className="font-medium text-[#667085]">
          Upload proof for the declarations that you have done for the{" "}
          <span className="text-[#344054]">FY 2022-23</span>
        </p>
      </div>
<div>
  <AmountCard amount="67,987 INR" title="Declared Amount" icon={StackGreen} iconBackgroundColor="bg-[#F2FFD6]" />
</div>
    </div>
  );
};
