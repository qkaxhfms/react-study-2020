import React, {useState} from "react";

function Counter4(){
    const [number,setNumber] = useState(0);
    const plus =() => {
        setNumber((prevNumber) => prevNumber+1);
    }
    const minus =()=> {
        setNumber((prevNumber)=> prevNumber -1);
    }

    return (
        <>
            <div>
    <h1>{number}</h1>
    <button type="button" onclick={plus}></button>
    <button type="button" onclick={minus}></button>
            </div>
        </>
    )
}

export default Counter4;