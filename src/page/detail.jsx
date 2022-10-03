import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../komponen/button";

export default function Detail() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [buku, setBuku] = React.useState({
    kode_penulis: "77777",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });

  const getBukuHandle = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan${id}?kode=77777`,
        buku
      );
      const dataUser = response.data.data;
      setBuku(() => {
        return {
          kode_penulis: "77777",
          judul_buku: dataUser.judul_buku,
          nama_pengarang: dataUser.nama_pengarang,
          nama_penerbit_buku: dataUser.nama_penerbit_buku,
          ketebalan_buku: dataUser.ketebalan_buku,
          tahun_terbit_buku: dataUser.tahun_terbit_buku,
          sinopsis: dataUser.sinopsis,
        };
      });
      console.log(response.data.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getBukuHandle();
  }, [id]);

  return (
    <div>
      <h1 className="text-center text-lg">Detail Buku dengan ID {id}</h1>
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
          <tr>
          <td className="py-4 text-white">
                  <Button
                    onClick={() => {
                      return navigate(-1);
                    }}
                    color="red"
                    title={"back"}
                  />
                </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
