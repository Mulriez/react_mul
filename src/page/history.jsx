import React from "react";
import { GetKeranjang } from "../API/dash";

export default function History() {
  const [list, setList] = React.useState([]);
  const [payload, setPayload] = React.useState({
    gambarProduk: "",
    namaProduk: "",
    harga: "",
  });
  const convertRupiah = require("rupiah-format");
  let number = payload.harga;
  let rupiah = convertRupiah.convert(number);
  const getKeranjang = async () => {
    try {
      const response = await GetKeranjang();
      setList(response.data.data);
    } catch (error) {}
    finally{}
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
            <p>History</p>
            <p>Keranjang</p>
          </div>
        </section>
      </header>
      <body className="px-[50px] flex justify-between my-[30px] relative">
       
      </body>
    </section>
  );
}
