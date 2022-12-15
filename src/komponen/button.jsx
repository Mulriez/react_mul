import React from "react";
export default function Button({ title, color = "red", disabled, ...props }) {
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: color,
          opacity: disabled ? 0.5 : 1,
        }}
        className="w-72 h-14 bg-[#446B7D] rounded-md ml-28 mt-10 text-white font-bold mb-5"
      >
        {title}
      </button>
    </React.Fragment>
  );
}
