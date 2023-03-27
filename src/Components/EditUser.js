import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../context/AppProvider";
import { BaseApp } from "../core/BaseApp";



export function EditUser(){
    const{user, setUser} = AppState();
    const history=useHistory();
    const [idx,setIdx] = useState("");
    const [name, setName] = useState("");
    const [batch,setBatch] = useState("");
    const [email,setEmail] = useState("");
    const [experience,setExperience] = useState("");

    const{id} =useParams();
    const selecteduser =user.find((per)=>per.id ===id);

    useEffect(()=>{
        setIdx(selecteduser.id);
        setName(selecteduser.name);
        setBatch(selecteduser.batch)
        setEmail(selecteduser.email);
        setExperience(selecteduser.experience);
    },[]);




    const UpdateUser= async()=>{
        const editIndex= user.findIndex((per)=>per.id ===id);
        console.log(editIndex);
        
                const editData={
                    id:idx,
                    name,
                    batch,
                    email,
                    experience
                }
        try {
            const response= await fetch(`https://641003a4e1212d9cc926f9fe.mockapi.io/users/${idx}`,{
                method : "PUT",
                body : JSON.stringify(editData),
                headers : {
                    "content-type":"application/json"
                },
            });
            const data = await response.json();
            console.log(data);
            user[editIndex]=data;
            setUser([...user])
            history.push("/");
        } catch (error) {
            console.log(error);
        }

     
    }


    return(
        <BaseApp
        title =" Update A User Details ">
            <div className="input-group-edit">

                    <input
                    placeholder="id"
                    value={id}
                    onChange={(event)=>setIdx(event.target.value)}
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
                  onClick={UpdateUser}
                    className="add-btn">Update</button>



            </div>
            </BaseApp>
    )
}