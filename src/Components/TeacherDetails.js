import React from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../context/AppProvider";
import { BaseApp } from "../core/BaseApp";

export function TeacherDetails(){
    const {mentor} = AppState();
    const{id}=useParams();
    const persons =mentor[id];

    return(
        <BaseApp
        title={"Teachers Information"}>
        <div className="user-content-view">

            
        <div className='user-card'>
                <h1>  {persons.name}</h1>
                <p>Batch : {persons.batch}</p>
                <p>Email : {persons.email}</p>
                <p> Exp :{persons.experience}</p>
            
            </div>

        </div>
        </BaseApp>
    )
}