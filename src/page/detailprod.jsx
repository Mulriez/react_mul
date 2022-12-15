import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Beli, GetDetailProduct, PostKeranjang } from "../API/dash";
import Button2 from "../komponen2/button2";
import Swal from "sweetalert2";

export default function Detail() {
  let { uuid } = useParams();
  let navigate = useNavigate();
  const [load, setLoad] = React.useState({
    produkId: "",
  });
  const [isload, setIsLoad] = React.useState({
    data: [
      {
        id: "",
        produkId: "",
        jumlah: 1,
        userId: 4,
        createdAt: "2022-12-09T02:30:57.000Z",
        updatedAt: "2022-12-09T02:30:57.000Z",
      },
    ],
  });
  const [gambar, setGambar] = React.useState();
  const [payload, setPayload] = React.useState({
    gambarProduk: "",
    namaProduk: "",
    rating: "",
    harga: "",
    stok: "",
    Kategori: "",
    deskripsi: "",
  });
  const convertRupiah = require("rupiah-format");
  let number = payload.harga;
  let rupiah = convertRupiah.convert(number);
  const handleKeranjang = async () => {
    try {
      const response = await PostKeranjang(load);
      console.log("res", response);
      if (response.data.status === "Success") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response.data.msg,
        });
      }
    } catch (err) {
    } finally {
    }
  };
  const buyNow = async () => {
    console.log("Udah di set");
    try {
      console.log("Jalan Buy");
      const response = await Beli(isload);
      console.log("RES", response);
      return;
    } catch (error) {}
  };
  console.log(handleKeranjang);
  const getDetailProduk = async () => {
    try {
      const response = await GetDetailProduct(uuid);
      const dataProduk = response.data.data;
      setLoad({ produkId: response.data.data.id });
      const json = response.data.data.gambarProduk;
      const gambarobj = JSON.parse(json);
      setGambar(gambarobj[0].gambar1);
      console.log("dataProduk =>", dataProduk);
      setPayload(() => {
        return {
          gambarProduk: dataProduk.gambar,
          namaProduk: dataProduk.namaProduk,
          rating: dataProduk.rating,
          harga: dataProduk.harga,
          stok: dataProduk.stok,
          Kategori: dataProduk.kategori,
          deskripsi: dataProduk.deskripsi,
        };
      });
      setIsLoad({
        data: [
          {
            id: "",
            produkId: "",
            jumlah: 1,
            userId: 4,
            createdAt: "2022-12-09T02:30:57.000Z",
            updatedAt: "2022-12-09T02:30:57.000Z",
          },
        ],
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailProduk();
  }, []);
  return (
    <section className="">
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#446B7D] border-b-2 border-b-black drop-shadow-xl px-[50px] flex justify-between items-center">
        <p className="text-white text-lg">LOGO</p>
        <section className="items-end space-x-78">
          <div className="flex space-x-[20px]">
            <FaShoppingCart
              className="cursor-pointer"
              color="ffffff"
              size={30}
              onClick={() => {
                return navigate("/keranjang");
              }}
            />
          </div>
        </section>
      </header>

      <body className="px-[50px] flex justify-between my-[30px] relative">
        <div className="w-[4000px] h-[600px] rounded-[10px] border-2 border-black bg-[#446B7D] p-[30px]">
          <div className="flex text-[20px]">
            <div className="w-[600px] h-[500px] bg-white rounded-[10px] border-2 border-black overflow-hidden">
              <img src={gambar} class="object-fill w-[600px] h-[500px]" />
            </div>
            <div className="">
              <h1 className="text-white text-2xl ml-10 mt-10">
                {payload.namaProduk}
              </h1>
              <div className="flex ml-10 mt-5 space-x-2 text-white text-sm">
                <FaStar className="text-[#EE4D2C] text-[20px]" />
                <p className="text-[#EE4D2C]">{payload.rating}</p>
                <p className="text-gray-700">|</p>
                <p>Stok: {payload.stok}</p>
              </div>
              <h1 className="poppins text-5xl text-[#EE4D2C] font-semibold ml-10 mt-5">
                {rupiah}
              </h1>
              <div className=" w-[640px] h-[160px] ml-10 mt-[60px] rounded-[10px] bg-white  p-[10px]">
                <h1>deskripsi:</h1>
                <p className="text-sm mt-2">{payload.deskripsi}</p>
              </div>
              <div>
                <Button2
                  color="grey"
                  title={"Masukan Keranjang"}
                  onClick={handleKeranjang}
                />
                <Button2
                  color="#EE4D2C"
                  title={"Beli Sekarang"}
                  onClick={buyNow}
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
}
