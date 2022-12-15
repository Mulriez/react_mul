import React from 'react';
import { FaStar } from "react-icons/fa";

const Card = ({ image, barang, stok, harga, rating, desk}) => {
  return (
    <section className="hover:scale-105 flex flex-col justify-between cursor-pointer w-[250px] h-[300px] rounded-[10px] bg-[#446B7D] px-[10px] py-[7px] transition-all ease-in-out duration-[300ms]">
      <div className="bg-white w-full h-[180px] border-black border-2 rounded-[10px] overflow-hidden flex justify-center items-center">
        <img src={image} alt="" className="w-fit h-fit"/>
      </div>

      <div className="text-white">
        <p className="poppins line-clamp-2 text-[14px] ">{barang}</p>
        <h1 className="poppins text-[18px] text-[#EE4D2C] font-semibold">{harga}</h1>
        <h1 className="poppins line-clamp-2 text-[10px] text-[#C4C4C4] h-8 overflow-hidden">{desk}</h1>

        <div className="flex items-center space-x-2">
          <FaStar className=' text-[#EE4D2C] text-[15px]'/>
          <p className="poppins text-[10px]">{rating}</p>
          <h1 className="poppins line-clamp-2 text-[10px] text-[#C4C4C4]">Stok: {stok}</h1>
        </div>
      </div>
    </section>
  );
};

export default Card;

