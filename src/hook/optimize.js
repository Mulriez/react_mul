import React, { memo, useCallback, useMemo } from "react";

import Button from "../komponen/button";

export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState("red");
  console.log("parent reader");
  //   cara 1
  //   const handleCount = () => {
  //     setCount((c) => c + 1);
  //   };
  const prosesBerat = (count) => {
    if (count < 2000000000000) {
    }
    console.log("runing process");
    return count + 1;
  };
  const prosesBeratMemo = useMemo(() => {
    return prosesBerat(count);
  }, [count]);
  //   cara 2
  const handleCount = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  //   const handleCountOP = useCallback(handleCount,[]);
  return (
    <div className="ml-10">
      <h1>Parent</h1>
      <p>count: {count}</p>
      <p>count 2 : {prosesBeratMemo}</p>
      <div className="space-x-3">
        <Button onClick={handleCount} title={"CLICK"} />
        <Button
          onClick={() => {
            setCount((c) => c - 1);
          }}
          title={"- CLICK"}
          color={"blue"}
        />
        <Button
          onClick={() => {
            setUser("red");
          }}
          title={"RED"}
        />
        <Button
          onClick={() => {
            setUser("green");
          }}
          title={"GREEN"}
          color={"green"}
        />
      </div>
      <MemorizeChild user={user} handleCount={handleCount} />
    </div>
  );
}
function Child({ user, handleCount }) {
  console.log("child reader");
  // delay(2000)
  return (
    <div>
      <h2>Child</h2>
      <p>user: {user}</p>
      <button
        className="bg-stone-500 text-white px-3 py-1 rounded"
        onClick={handleCount}
      >
        Tambah count from child
      </button>
    </div>
  );
}
const MemorizeChild = memo(Child);
// export default memo(Child)
function delay(milisec) {
  const date = Date.now();
  let currentDate = null;
  if (milisec < 20000000) {
  }
}
