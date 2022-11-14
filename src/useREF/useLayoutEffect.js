import { useLayoutEffect, useEffect } from "react";

export default function LayoutTutor() {
    useLayoutEffect(()=>{
        console.log("UseLayoutEffect");
    }, []);
    useEffect(()=>{
        console.log("UseEffect");
    }, []);
    return <div></div>
}