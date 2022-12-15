import React from "react";

export default function Input2({ label, isError, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input
        {...props}
        className="input-text p-2 flex w-[200px] h-7 bg-[#C4C4C4] rounded-md mt-3"
        id={label}
      />
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
