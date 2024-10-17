import { useState } from "react";

const Dream = () => {
    const [add ,setAdd] = useState(11);
    const addedHandle = ()=>{
        
        setAdd(add + 1)
    }
    const removeHandle = ()=>{
        
        setAdd(add - 1)
    }
    return (
        <div style={{border:"2px solid orange", margin:"10px", borderRadius: "10px"}}>
            <h4>Plays: {add}</h4>
            <button onClick={addedHandle}>Add</button>
            <button onClick={removeHandle}>Remove</button>
        </div>
    );
};

export default Dream;