import React from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { DelKeranjang } from "../API/dash";

const Barang = ({ gambar, nama, harga, key, id }) => {
  const [status,setStatus] = React.useState()
  const hapusKeranjanghandle = async (id) => {
    // e.preventDefault();
    try {
      let response = await DelKeranjang(id);
      console.log('hapusKeranjanghandle =>', response);
    } catch (err) {
      console.log('hapusKeranjanghandle err =>', err);
    }
  };

  return (
    <section
      className="w-full h-[200px] rounded-[10px] border-2 border-black bg-[#C4C4C4] p-5 mb-5"
      key={key}
    >
      <div className="flex h-full w-full">
        <div className="w-[220px] h-full mr-5 border-2 border-black rounded-[10px] flex items-center">
          <img src={gambar} alt="" className="rounded-[10px] w-full h-full" />
        </div>
        <div className="flex items-center text-lg  ml-[70px] space-x-[150px]">
          <h1>{nama}</h1>
          <div className="flex items-center space-x-5">
            <AiOutlineMinusCircle className="cursor-pointer" size={30} />
            <p className="text-[#EE4D2C]">1</p>
            <AiOutlinePlusCircle className="cursor-pointer" size={30} />
          </div>
          <h1 className="text-[#EE4D2C]">{harga}</h1>
          <button
            className="ml-[1350px]"
            onClick={() => {
              hapusKeranjanghandle(id);
            }}
          >
            <AiFillCloseCircle
              className="cursor-pointer"
              color="red"
              size={30}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Barang;
