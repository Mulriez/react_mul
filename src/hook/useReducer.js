import React, { useReducer } from "react";
import Button from "../komponen/button";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
      showText: state.showText,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
      showText: state.showText,
    };
  }
  if (action.type === "toggleShowText") {
    return {
      count: state.count,
      showText: !state.showText,
    };
  }

  return state;
};
function Reduce() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div className="border">
      <h1 className="text-xl mt-7 mb-8 ml-40">{state.count}</h1>
      <div className="space-x-5 flex ml-14">
        <Button
          title={"INCREMENT"}
          color="blue"
          onClick={() => {
            dispatch({
              type: "INCREMENT",
            });
            dispatch({
              type: "toggleShowText",
            });
          }}
        />
        <Button
          title={"DECREMENT"}
          onClick={() => {
            dispatch({
              type: "DECREMENT",
            });
            dispatch({
              type: "toggleShowText",
            });
          }
        }
        />
      </div>
      {state.showText && (
        <p className="text-xl text-white bg-sky-700 w-40 mt-3 rounded-md ml-20">
          シン・エヴァンゲリオン劇場版
        </p>
      )}
    </div>
  );
}
export default Reduce;
