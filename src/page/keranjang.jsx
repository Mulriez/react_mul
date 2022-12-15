import React from "react";
import { useNavigate } from "react-router-dom";
import { DelKeranjang, GetKeranjang } from "../API/dash";
import Barang from "../komponen2/barang";
import Swal from "sweetalert2";


export default function Keranjang() {
  let navigate = useNavigate;
  const [list, setList] = React.useState([]);
  const [payload, setPayload] = React.useState({
    harga: "",
  });
  const convertRupiah = require("rupiah-format");
  let number = payload.harga;
  let rupiah = convertRupiah.convert(number);
  const getKeranjang = async () => {
    try {
      const response = await GetKeranjang();
      setList(response.data.data);
    } catch (error) {
    } finally {
    }
  };
  React.useEffect(() => {
    getKeranjang();
  }, []);
  
  return (
    <section className="">
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#446B7D] border-b-2 border-b-black drop-shadow-xl px-[50px] flex justify-between items-center text-white text-lg">
        <p>LOGO</p>
        <section className="items-end space-x-78">
          <div className="flex space-x-[20px]">
            <p onClick={()=> {
            //  return navigate ("/history",{repla})
            }}>History</p>
            <p>|</p>
            <p>Keranjang</p>
          </div>
        </section>
      </header>
      <body className="px-[50px] flex justify-between my-[30px] relative">
        <div className="w-[4000px] h-full rounded-[10px] bg-[#446B7D] p-[30px]">
          <div className="mt-10">
            {list.map((item, index) => {
              const convertRupiah = require("rupiah-format");
              let number = item.produk.harga;
              let rupiah = convertRupiah.convert(number);
              const json = item?.produk.gambarProduk;
              const ject = JSON.parse(json);
              return (
                <div key={index}>
                  {/* <button className="ml-[1350px]">
                    <AiFillCloseCircle
                      className="cursor-pointer"
                      color="red"
                      size={30}
                    />
                  </button> */}
                  <Barang
                    gambar={ject[0].gambar1}
                    nama={item.produk.namaProduk}
                    harga={rupiah}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </body>
    </section>
  );
}
