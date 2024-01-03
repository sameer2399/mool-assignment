import React, { useEffect, useState } from "react";
import EditIcon from "../../../assets/edit.svg";

const EditAmount = ({val, id, section, updateAmount }) => {
  const [amount, setAmount] = useState(val);

  const handleChange = (e) => {
    setAmount(e.target.value);
    updateAmount(section, id, e.target.value);
  };

  return (
    <input
      className="border border-[#E5E5E5] rounded-md px-2 py-1 w-20"
      type="text"
      value={amount}
      onChange={handleChange}
    />
  );
};

export const EditableRow = ({resetEdit, id, label, amount, updateAmount, section }) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (resetEdit) {
      setIsEditing(false);
    }
  }, [resetEdit]);

  return (
    <div className="py-4 flex items-center text-sm font-medium text-[#667085]">
      <p className="flex-1">{label}</p>
      <div className="mr-5 flex gap-1 items-center">
        {isEditing ? (
          <EditAmount
            val={amount}
            id={id}
            section={section}
            updateAmount={updateAmount}
          />
        ) : (
          <p>{amount}</p>
        )}
        <img
          src={EditIcon}
          alt="edit"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setIsEditing(true)}
        />
      </div>
    </div>
  );
};
