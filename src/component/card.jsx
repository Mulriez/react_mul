import React from "react";

export default function Card({ data, value, setData}) {
    console.log('data adalah', data)

    const handleDelete = (e) => {
        e.preventDefault()
        data.filter((item)=>{
            return item.id !== e.target.value
        });

        let filter= data.filter((item)=>{
            return item.id !== parseFloat(e.target.value);
        })
        console.log(filter);
        setData(()=>{
            return filter;
        })

        console.log('delete button clicked');
    }
    return (
        <React.Fragment>
            <div>
                {data?.map((item) => {
                    return (
                        <div>
                            <p className="mb"> {item?.username}</p>
                            <p> {item?.email}</p>
                            <p>{item?.id}</p>
                            <button value={item?.id} onClick={handleDelete} className="btn"
                            >Hapus</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
