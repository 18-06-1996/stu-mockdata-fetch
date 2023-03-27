import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/AppProvider";
import { BaseApp } from "../core/BaseApp";


export function AddUser(){
    const{user, setUser} = AppState();
const history = useHistory();

const [id,setId] = useState("");
const [name, setName] = useState("");
const [batch,setBatch] = useState("");
const [email,setEmail] = useState("");
const [experience,setExperience] = useState("");

const addNewUser= async(e)=>{

    const newUser={
        id,
        name,
        batch,
        email,
        experience
    }
    e.preventDefault();
    try {
        const response = await fetch("https://641003a4e1212d9cc926f9fe.mockapi.io/users",{
            method : "POST",
            body : JSON.stringify(newUser),
            headers : {
                "content-type": "application/json"
            },
        });
        const data = await response.json();
        console.log(data);
        setUser([...user, data])
        history.push("/");
    } catch (error) {
        console.log(error)
    }

    
   
   
}

    return(
        <BaseApp
        title =" A New User ">
            <div className="input-group">

                    <input
                    placeholder="id"
                    value={id}
                    onChange={(event)=>setId(event.target.value)}
                    />

                    
                    <input
                    placeholder="name"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    />

                    
                    <input
                    placeholder="batch"
                    value={batch}
                    onChange={(event)=>setBatch(event.target.value)}
                    />

                    
                    <input
                    placeholder="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />

                    
                    <input
                    placeholder="experience"
                    value={experience}
                    onChange={(event)=>setExperience(event.target.value)}
                    />

                    <button
                    onClick={addNewUser}
                    className="add-btn">Add</button>



            </div>
            </BaseApp>

    )
}