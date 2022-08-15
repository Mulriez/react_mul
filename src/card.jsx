import React from "react";

export default function Card({ count, setCount, col, setCol }) {
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: col, width: 300, height: 300 }}>
        <p>{col}</p>
      </div>
      <button
        onClick={() => {
          setCol("red");
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setCol("yellow");
        }}
      >
        yellow
      </button>
      <button
        onClick={() => {
          setCol("green");
        }}
      >
        green
      </button>
      <p>Card</p>
      <h3>{count <= 10 ? "kurang dari sepuluh" : "lebih dari sepuluh"}</h3>
      {count}
      <button onClick={handleMinus}>minus</button>
      <button onClick={handlePlus}>plus</button>
    </React.Fragment>
  );
}
