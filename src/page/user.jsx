import React from "react";
import axios from "axios";
import Card from "./card"

export default function User() {
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api
  const [page, setPage] = React.useState(1);
  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
      console.log("response => ", response.data);
      setUsers(response.data);
    } catch (err) {}
  };

  console.log("user => ", users);
  
  React.useEffect(() => {
    getUserHandle();
  },[])
  

  return (
    <div
    className="bg-slate-500"
    >
      <h1
      className="text-purple-800 text-4xl py-5"
      >Daftar Surat</h1>
      <div
      className="grid grid-cols-3 gap-3"
      >
        {users.map((user, index) => {
            return (
              <Card key={index} 
               nomor={index + 1}
               nama={user.nama}
               namaLatin={user.nama_latin}
               jumlahAyat= {user.jumlah_ayat}
               tempatTurun= {user.tempat_turun}
               arti= {user.arti}
              />
            );
          })}
      </div>
     
    </div>
  );
}