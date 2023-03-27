import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/AppProvider";
import { BaseApp } from "../core/BaseApp";


export function UserComponent(){

    const{user, setUser} = AppState();  
const history= useHistory();

    const DeleteUser=async(idx)=>{
        try {
            const response = await fetch(`https://641003a4e1212d9cc926f9fe.mockapi.io/users/${idx}`,{
                method : "Delete",
            });
            const data = await response.json();
            console.log(data);
            
    const alterlist = user.filter((per,id)=> per.id !== idx);
    setUser(alterlist);
    if(!data){
        console.log("data not fetch");
    }
        } catch (error) {
            console.log(error);
        }


    }

return(

<BaseApp
title="Users Details">
<div className="user-content">

{
user &&(

user?.map((person,idx)=>(

<div key={idx} className="user-card">
<h1> {person.name}</h1>
<p> Batch : {person.batch}</p>
<p>Email : {person.email}</p>
<p>Exp : {person.experience}</p>


<div className="btn-group">
<button
    onClick={()=>history.push(`/edit/${person.id}`)}
    className="edit-btn"> Edit</button>
    <button onClick={()=>history.push(`/user/${idx}`)}
     className="view-btn"> view</button>
    <button
    onClick={()=>DeleteUser(person.id)}
    className="del-btn"> delete</button>

</div>

</div>
)))}


   
</div>

</BaseApp>


)
}