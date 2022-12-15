import React from "react";
import Card from "../komponen2/card";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Select2 from "../komponen2/select2";
import { GetProduct } from "../API/dash";
import { FaShoppingCart, FaUserCircle, FaFilter } from "react-icons/fa";
import Input2 from "../komponen2/input2";
import Input from "../komponen/input";

const Home = () => {
  const [listProduct, setListProduct] = React.useState([]);
  let navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    kategori: "",
    keyword: "",
    hargaTerendah: "",
    hargaTertinggi: "",
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getProduct = async (e) => {
    try {
      setFetchProduct(true);
      const response = await GetProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log("response =>", response);
      console.log("product =>", response.data.data.rows);
      setListProduct(response.data.data.rows);
    } catch (err) {
      console.log("err =>", err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getProduct();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);

  console.log("listProduct >", listProduct);
  console.log("payload >", payload);

  console.log("listProduct >", listProduct);
  return (
    <section className="">
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#446B7D] border-b-2 border-b-black drop-shadow-xl px-[50px] flex justify-between items-center">
        <p className="text-white text-lg">LOGO</p>
        <Input
          onChange={handleChange}
          value={payload.keyword}
          name={"keyword"}
          placeholder="Search"
        />
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
        <div className="w-[260px] h-[885px] -ml-10 rounded-[10px] border-2 border-black bg-[#446B7D] p-[30px]">
          <div className="flex items-center space-x-2 text-[20px]">
            <FaFilter color="ffffff" />
            <p className="text-white poppins text-xl">Filter Berdasarkan</p>
          </div>
          <Select2
            onChange={handleChange}
            name={"kategori"}
            value={payload.kategori}
          >
            <option value={""}>Kategori</option>
            <option value="handphone">Handphone</option>
            <option value="mobil">Mobil</option>
            <option value="motor">Motor</option>
            <option value="sepatu">Sepatu</option>
            <option value="tas">Tas</option>
            <option value="televisi">Televisi</option>
          </Select2>
          <div className="mt-20">
            <p className="text-white">Batas harga:</p>
            <Input2
              onChange={handleChange}
              type={"number"}
              value={payload.hargaTertinggi}
              name={"hargaTertinggi"}
              placeholder="Harga Tertinggi"
            />
            <Input2
              onChange={handleChange}
              type={"number"}
              value={payload.hargaTerendah}
              name={"hargaTerendah"}
              placeholder="Harga Terendah"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-5">
          {listProduct.map((item, index) => {
            const convertRupiah = require("rupiah-format");
            let number = item.harga;
            let rupiah = convertRupiah.convert(number);
            const json = item?.gambarProduk;
            const ject = JSON.parse(json);
            return (
              <NavLink to={`/product/detail/${item.uuid}`}>
                <div key={index}>
                  <Card
                    image={ject[0].gambar1}
                    barang={item?.namaProduk}
                    stok={item.stok}
                    desk={item.deskripsi}
                    harga={rupiah}
                    rating={item?.rating}
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
      </body>
    </section>
  );
};

export default Home;
