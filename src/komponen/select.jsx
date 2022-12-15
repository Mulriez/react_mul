import React from "react";

export default function Select({ label, isError, textError,children, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <select {...props} className="input-text w-96 h-10 bg-[#C4C4C4] rounded-md ml-16 mt-2" id={label}>
        {children}
      </select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
