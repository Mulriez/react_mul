import React from "react";
import Button from "../komponen/button";

export default function Parent(){
    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState("BLACK SUN");
    console.log("parent reader");
    return(
        <div>
            <h1>Parent</h1>
            <p>count: {count}</p>
            <Button 
            onClick={()=>{
                setCount((c)=> c +1);
            }}
            title={"CLICK"}
            />
            <Child user={user}/>
        </div>
    );
}
function Child({user}) {
    console.log("child reader");
    return(
        <div>
            <h2>Child</h2>
            <p>user: {user}</p>
        </div>
    )
}
function delay(milisec){
    const date = Date.now();
    let currentDate = null;
    do{
        currentDate = Date.now();
    }while(currentDate - date < milisec)
}