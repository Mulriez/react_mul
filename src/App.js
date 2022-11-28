import React from "react";
import useJuz from "./hook/useJuz";

function App() {
  // const { alquran } = useList();
  //cara memanggil
  const { alquran: data, setJuz, juz } = useJuz(1);
  console.log("alquran", data);
  return (
    <React.Fragment>
      <div className="w-full h-full bg-gray-800">
        <h1 className="w-full bg-emerald-400">Belajar hook</h1>
        <h2 className="font-bold text-white">{juz}</h2>
        <button
          onClick={() => setJuz((juz) => juz + 1)}
          className="px-3 py-1 bg-slate-500 text-white rounded-md"
        >
          Ganti juz
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
