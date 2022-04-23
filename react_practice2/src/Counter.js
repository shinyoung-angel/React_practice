import React, {useState} from "react";


const Counter = () => {

    const [count, setCount] = useState(0);

    const onIncrease = () =>{
        setCount(count+1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button>-</button>
        </div>
    )
}

export default Counter;