import React from "react";
export default function Button2({ title, color = "white", disabled, ...props }) {
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: color,
          opacity: disabled ? 0.5 : 1,
        }}
        className="w-[300px] h-14 bg-[#446B7D] rounded-md ml-10 mt-10 text-white font-bold mb-5"
      >
        {title}
      </button>
    </React.Fragment>
  );
}
