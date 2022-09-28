import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Add() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const [formError, setFormError] = React.useState("");
  const [buku, setBuku] = React.useState({
    kode_penulis: "",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });

  const handleChange = (e) => {
    setBuku((buku) => {
      return {
        ...buku,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api-react-2.herokuapp.com/api/perpustakaan`,
        buku
      );
      setIsLoading(false);
      alert("Berhasil");
    } catch (err) {
      setIsLoading(true);
      alert("there is an error");
    }
    if (
      buku.kode_penulis !== 77777 ||
      buku.judul_buku === "" ||
      buku.nama_pengarang === "" ||
      buku.nama_penerbit_buku === "" ||
      buku.ketebalan_buku === 0 ||
      buku.tahun_terbit_buku < 2000 ||
      buku.tahun_terbit_buku > 2022 ||
      buku.sinopsis.length < 30
    ) {
      if (buku.kode_penulis !== 10101) {
        setError((error) => {
          return {
            ...error,
            kode_penulis: true,
          };
        });
      }
      if (buku.judul_buku === "") {
        setError((error) => {
          return {
            ...error,
            judul_buku: true,
          };
        });
      }
      if (buku.nama_pengarang === "") {
        setError((error) => {
          return {
            ...error,
            nama_pengarang: true,
          };
        });
      }
      if (buku.nama_penerbit_buku === "") {
        setError((error) => {
          return {
            ...error,
            nama_penerbit_buku: true,
          };
        });
      }
      if (buku.ketebalan_buku === 0) {
        setError((error) => {
          return {
            ...error,
            ketebalan_buku: true,
          };
        });
      }
      if (buku.tahun_terbit_buku < 2000 || buku.tahun_terbit_buku > 2022) {
        setError((error) => {
          return {
            ...error,
            tahun_terbit_buku: true,
          };
        });
      }
      if (buku.sinopsis.length < 30) {
        setError((error) => {
          return {
            ...error,
            sinopsis: true,
          };
        });
      }
    }
  };

  const handleBlur = (e) => {
    if (buku.sinopsis.length < 30) {
      setError((error) => {
        return {
          ...error,
          sinopsis: true,
        };
      });
      setFormError("Minimal 30 karakter!");
    }

    if (buku.kode_penulis !== 10101) {
      setError((error) => {
        return {
          ...error,
          kode_penulis: true,
        };
      });
      setFormError("Kode salah!");
    }

    if (e.target.value === "") {
      setError(() => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    } else {
      setError(() => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }
  };

  return (
    <div className="mt-5">
      <h1 className="text-center  mb-3">Tambah Buku</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          onBlur={handleBlur}
          error={error.kode_penulis}
          value={buku.kode_penulis}
          label={"kode"}
          name={"kode_penulis"}
          onChange={handleChange}
        />

        <Input
          onBlur={handleBlur}
          error={error.judul_buku}
          value={buku.judul_buku}
          label={"Judul"}
          name={"judul_buku"}
          onChange={handleChange}
        />

        <Input
          onBlur={handleBlur}
          error={error.nama_pengarang}
          value={buku.nama_pengarang}
          label={"Nama Pengarang"}
          name={"nama_pengarang"}
          onChange={handleChange}
        />

        <Input
          onBlur={handleBlur}
          error={error.nama_penerbit_buku}
          value={buku.nama_penerbit_buku}
          label={"Penerbit"}
          name={"nama_penerbit_buku"}
          onChange={handleChange}
        />

        <Input
          onBlur={handleBlur}
          error={error.tahun_terbit_buku}
          value={buku.tahun_terbit_buku}
          label={"Tahun terbit"}
          name={"tahun_terbit_buku"}
          onChange={handleChange}
        />

        <Input
          onBlur={handleBlur}
          error={error.ketebalan_buku}
          value={buku.ketebalan_buku}
          label={"ketebalan buku"}
          name={"ketebalan_buku"}
          onChange={handleChange}
        />

        <Input
          onBlur={handleBlur}
          error={error.sinopsis}
          value={buku.sinopsis}
          label={"Sinopsis"}
          name={"sinopsis"}
          onChange={handleChange}
        />
        <div className="space-x-5 mt-5">
          <Button title={isLoading ? "Menyimpan" : "simpan"} color="yellow" />
          <Button title={"reset"} />
          <Link to="/admin/buku" className="px-4">
            <Button color="blue" title={"Back"} />
          </Link>
        </div>
      </form>
    </div>
  );
}
