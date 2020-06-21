import React, {useState} from 'react';
import './Room.css';
function Room(){
    // const state = useState(true);
    // const isLit = state[0];
    // const setLit = state[1];
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(22);
    let [temp, setTemp] = useState(72)
    // function updateLit(){
    //     setLit(!isLit);   
 
    // }
    return (
        <div className = {`room ${isLit ? "lit" : "dark"}`}>
            <h2>The room is: {isLit ? "Lit" : "Dark"} </h2>
            <h2>Temperature is: {temp} &#x2109; </h2>
            The age is : {age}<br/>
            <button className = "button" onClick = {()=>setLit(!isLit)}>Toggle Light</button><br/>
            <button className = "button" onClick = {()=>setLit(true)}>On</button><br/>
            <button className = "button" onClick = {()=>setLit(false)}>Off</button><br/>
            <button className = "button incdec-button" onClick = {()=>setTemp(++temp)}>&oplus;</button><br/>
            <button className = "button incdec-button" onClick = {()=>setTemp(--temp)}>&#8854;</button><br/>
            <button  className = "button age-button" onClick = {()=>{setAge(++age)}}>Increase Age</button>
        </div>
    )
}

export default Room;