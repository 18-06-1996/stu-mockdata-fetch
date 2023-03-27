import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/AppProvider";
import { BaseApp } from "../core/BaseApp";



export function TeacherComponent(){

    const {mentor,setMentor} = AppState();

    const history= useHistory();

    const DeleteMentor=async(idx)=>{
        try {
            const response = await fetch(`https://641003a4e1212d9cc926f9fe.mockapi.io/users/${idx}`,{
                method : "Delete",
            }); 
            const data = await response.json();
            console.log(data);
            const alteredlist = mentor.filter((per)=> per.id !== idx)
        setMentor(alteredlist);
        if(!data){
            console.log("unable to delete data ")
        }
        } catch (error) {
            console.log(error);
        }

    
    }

    return(
         <BaseApp 
         title={"teacher details"}>
         
<div className="user-content">
{
    mentor &&(
        mentor?.map((persons,idx)=>(
            <div key={idx} className="user-card">
                     <h1>{persons.name}</h1>
                     <p> Batch : {persons.batch}</p>
                    <p>Email : {persons.email}</p>
                    <p>Exp : {persons.experience}</p>
           
                    <div className="btn-group">
    <button
    onClick={()=>history.push(`/editer/${persons.id}`)}
    className="edit-btn"> Edit</button>
    <button 
    onClick={()=>history.push(`teachers/${idx}`)}
     className="view-btn"> view</button>
    <button
    onClick={()=>DeleteMentor(persons.id)}
    className="del-btn"> delete</button>

</div>
           
           
           
           
           
            </div>
        )
        )
    )
}
</div>

         </BaseApp>
    )
}


    