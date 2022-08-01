import React from 'react';
export default function Nilai({nama, data}) {
    console.log('nama', nama);
    console.table(data)
    return(
        <React.Fragment>
            <div>
                <h1>Daftar Nilai</h1>
                <h1>{nama}</h1>
                <ol>
                    {data?.map((item, index)=> {
                        return(
                            <li>
                                {""}
                                Nilai ujian ke-{index + 1} adalah {item}
                            </li>
                        )
                    } )}
                </ol>
            </div>
        </React.Fragment>
    )
}