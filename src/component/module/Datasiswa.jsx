import React from "react";

export default function DataSiswa({ data }) {
  return (
    <React.Fragment>
      ini komponen data siswa
      {data?.map(function (item, index) {
        return (
          <div className="id dua">
            <p>Nama : kipli</p>
            <p>Kelas : kelas</p>
            <p>Nilai : nilai</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}