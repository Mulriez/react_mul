import React from "react";

export default function Input({ label, isError, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input
        {...props}
        className="input-text p-2 flex w-96 h-10 bg-[#C4C4C4] rounded-md ml-16 mt-2 placeholder:ml-2"
        id={label}
      />
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
