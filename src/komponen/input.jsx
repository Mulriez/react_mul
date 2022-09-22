import React from "react";

export default function Input({ label, isError, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input {...props} className="input-text border w-screen w-300" id={label} />
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
