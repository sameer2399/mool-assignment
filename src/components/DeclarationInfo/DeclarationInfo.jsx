import React, { useState } from "react";
import { Warning } from "../UI/Warning/Warning";
import AmountCard from "../UI/AmountCard/AmountCard";
import StackGreen from "../../assets/coins-stacked-green.svg";
import StackBlue from "../../assets/coins-stacked-blue.svg";
import Switch from "../../assets/switch.svg";
import TaxBg from "../../assets/tax-bg.svg";
import WalletIcon from "../../assets/wallet.svg";
import ShildtIcon from "../../assets/shield-plus.svg";
import FileIcon from "../../assets/file.svg";
import { Accordian } from "../UI/Accordian/Accordian";
import { EditableRow } from "../UI/EditableRow/EditableRow";
import useFetchData from "../../hooks/useFetchData ";

export const DeclarationInfo = () => {
  const { loading, data, error, updateAmount } = useFetchData();
  const [resetEdit, setResetEdit] = useState(false);

  const getIcon = (section) => {
    const iconMap = {
      "80C": WalletIcon,
      "80D": ShildtIcon,
      "80G": FileIcon,
    };

    return iconMap[section];
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSave = async () => {
    await delay(1000);

    console.log(data);
    setResetEdit(true);

    await delay(200);

    setResetEdit(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  } else if (error && !data) {
    return <p className="text-red-600 text-center text-lg">{error}</p>;
  }
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
      <div className="flex gap-12 my-10 px-8">
        <AmountCard
          amount="67,987 INR"
          title="Declared Amount"
          icon={StackGreen}
          iconBackgroundColor="bg-[#F2FFD6]"
        />

        <AmountCard
          amount="67,987 INR"
          title="Remaining to Declare"
          icon={StackBlue}
          iconBackgroundColor="bg-[#D6EEFF]"
        />
      </div>
      <div className="relative bg-[#F4F6FA] px-8 py-[18px]">
        <img
          className="absolute top-0 right-0 h-full w-full "
          src={TaxBg}
          alt="bg"
        />
        <div className="flex items-center gap-2 ">
          <span className="text-[#667085] font-medium">Tax Regime :</span>
          <span className="text-[#344054] font-semibold">Old</span>
          <img src={Switch} alt="switch" className="w-5 h-5" />
          <span className="text-[#405CD2] font-semibold">Change</span>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="border-2 border-[#10AA64] rounded-full w-5 h-5 mt-[6px] flex items-center justify-center text-[#10AA64] text-xs font-bold">
            i
          </div>
          <p className="text-[#10AA64] text-sm font-medium max-w-[480px]">
            Considering your salary structure we feel that Old Regime suits you
            the best. Although you can move to other tax regime if you want
          </p>
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-4">
        {[...Object.keys(data.formattedData)].map((section) => (
          <Accordian
            key={section}
            title={
              <>
                <img
                  src={getIcon(section)}
                  alt={`${section} icon`}
                  className="w-6 aspect-square"
                />
                <p>{"Section " + section}</p>
              </>
            }
          >
            <div>
              {data?.formattedData &&
                data?.formattedData[section]?.map((item) => (
                  <EditableRow
                    key={item.label}
                    resetEdit={resetEdit}
                    updateAmount={updateAmount}
                    {...item}
                  />
                ))}
            </div>
          </Accordian>
        ))}
      </div>
      ;
      <button
        className="px-4 py-[10px] bg-[#405CD2] text-sm font-semibold text-white rounded-md mt-12"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};
