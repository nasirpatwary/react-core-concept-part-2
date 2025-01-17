import { useEffect, useState } from "react";
import "./Friends.css"
import Friend from "./Friend";
const Friends = () => {
    const [friends, setFriend] = useState([])
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data => setFriend(data))
    }, [])
    return (
        <div className="box">
            <h4>Friend: {friends.length}</h4>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;