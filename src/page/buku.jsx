import React from "react";
import axios from "axios";
import { Outlet, Link, useNavigate, } from "react-router-dom";
import Button from "../komponen/button";

export default function Buku() {
    let navigate = useNavigate();
  const [buku, setBuku] = React.useState([]);

  const getBukuHandle = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan?kode=77777`
      );
      setBuku(response.data.data.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getBukuHandle();
  });

  return (
    <div>
      <h1 className="text-center text-lg">Buku</h1>
      <Link to="/tambah" className="text-white">
        <Button title={"Tambah Buku"} color="purple" />
      </Link>
      <table className="table-fixed border-colapse mt-4">
        <thead>
          <tr>
            <th className="pr-5">Kode</th>
            <th className="pr-5">Judul</th>
            <th className="pr-5">Pengarang</th>
            <th className="pr-5">penerbit</th>
            <th className="pr-5">Ketebalan Buku</th>
            <th className="pr-5">tahun terbit</th>
            <th className="pr-7">Sinopsis</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((buku, index) => {
            return (
              <tr key={index} className=" border">
                <td className="pr-5">{buku.kode_penulis}</td>
                <td className="pr-5">{buku.judul_buku}</td>
                <td className="pr-5">{buku.nama_pengarang}</td>
                <td className="pr-5">{buku.nama_penerbit_buku}</td>
                <td className="pr-5">{buku.ketebalan_buku}</td>
                <td className="pr-5">{buku.tahun_terbit_buku}</td>
                <td className="pr-5">{buku.sinopsis}</td>
                <td className="py-4 text-white">
                  <Button
                    onClick={() => {
                      return navigate(`/update/${buku.id}`);
                    }}
                    color="blue"
                    title={"edit"}
                  />
                </td>
                <td className="text-white">
                <Button 
                  onClick={() =>{
                    return navigate(`/detail/${buku.id}`)
                  }}
                  color="purple" title={"Detail"} />
                </td>
              </tr>
            );
          })}
        </tbody>
        <div>
       <Outlet/>
      </div>
      </table>
    </div>
  );
}