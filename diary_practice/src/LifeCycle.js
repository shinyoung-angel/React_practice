import React, {useEffect, useState} from "react";


const LifeCycle = () => {

    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("");

    useEffect(()=>{
        console.log('update');
    });

    return (
        <div style={{padding: 20}}>
            <div>
                {count}
                <button onClick={()=> setCount(count+1)}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
        </div>
    )
};

export default LifeCycle;