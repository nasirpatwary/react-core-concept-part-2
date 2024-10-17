import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    const handleAdded = () =>{
        const addCount = count + 1;
        setCount(addCount)
    }
    const handleRemove = () =>{
        const removeCount = count - 1;
        setCount(removeCount)
    }
    const styles = {
        border: "2px solid green",
        borderRadius: "10px",
        margin: "10px"
    }
    return (
        <div style={styles}>
            <h4>Counter: {count}</h4>
            <button onClick={handleAdded}>Added</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Counter;