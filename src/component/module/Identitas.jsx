import React from 'react';

const Identitas = ({nama = "siswa", kelas="x", nilai=0}) =>{
    return(
        <div className="id">
        <p>Nama : {nama}</p>
        <p>Kelas : {kelas}</p>
        <p>Nilai : {nilai}</p>
      </div> 
    )
}

export default Identitas