import React from "react";
export default function Produk({ data }) {
    return (
        <React.Fragment>
            <h1>Data Produk di Indonesia</h1>
            {data?.map((item, index1) => {
                return (
                    <div key={index1}>
                        <h1>data ke {index1}</h1>
                        <h3>jenis : {item.jenis}</h3>
                        <h3>produk : {item.produk}</h3>
                        <div>
                            <h2>Tipe</h2>
                            <div>
                                {item?.brand?.map((value, index2) => {
                                    return (
                                        <div key={index2}>
                                            <p>{value.nama}</p>
                                            <p>{value.harga}</p>
                                            <p></p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
} 