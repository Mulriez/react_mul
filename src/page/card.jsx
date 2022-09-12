import React from "react";

export default function Card({
  nomor,
  nama,
  namaLatin,
  jumlahAyat,
  tempatTurun,
  arti,
}) {
  return (
    <div className="border rounded-md text-purple-400">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="ml-2">{nomor}.</div>
          <div  className="ml-2">{namaLatin}</div>
        </div>
        <div>
          <div className="mr-2">{jumlahAyat}</div>
        </div>
      </div>
      <div className="text-3xl text-right mr-2">{nama}</div>
      <div className="flex flex-row ">
        <div className="ml-2">{tempatTurun} • </div>
        <div  className="ml-2">{arti}</div>
      </div>
    </div>
  );
}
