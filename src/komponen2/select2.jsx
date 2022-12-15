import React from "react";

export default function Select2({
  label,
  isError,
  textError,
  children,
  ...props
}) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <select
        {...props}
        className="input-text w-[200px] h-7 bg-[#C4C4C4] rounded-md  mt-10"
        id={label}
      >
        {children}
      </select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
