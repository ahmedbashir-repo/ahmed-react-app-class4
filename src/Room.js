import React, {useState} from 'react';
import './Room.css';
function Room(){
    // const state = useState(true);
    // const isLit = state[0];
    // const setLit = state[1];
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(22);
    // function updateLit(){
    //     setLit(!isLit);   
 
    // }
    return (
        <div className = {`room ${isLit ? "lit" : "dark"}`}>
            This is room component: {isLit ? "Lit" : "Dark"} <br/>
            The age is : {age}<br/>
            <button onClick = {()=>setLit(!isLit)}>Toggle Light</button><br/>
            <button onClick = {()=>{setAge(++age)}}>Increase Age</button>
        </div>
    )
}

export default Room;