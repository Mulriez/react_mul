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
                            <p>id: {item?.id}</p>
                            <p>Username : {item?.username}</p>
                            <p>Email : {item?.email}</p>
                            <p>Password : {item?.password}</p>
                            <p>Confirm-Password : {item?.confirmPassword}</p>
                            <button value={item?.id} onClick={handleDelete}>Hapus</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
