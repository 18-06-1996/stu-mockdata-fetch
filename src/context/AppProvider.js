import React, { children, createContext, useContext, useEffect, useState } from "react";
import { data } from "../Data/Data";
import { dataTeacher } from "../Data/DataTeacher";


const AppContext =createContext();

export const AppProvider =({children})=>{

    const [user,setUser] = useState([]);
    const [mentor, setMentor] = useState(dataTeacher);
   
   useEffect(()=>{

    const getUserDetails=async()=>{
        try{

        
const response = await fetch("https://641003a4e1212d9cc926f9fe.mockapi.io/users",{
    method : "GET",
});
const data = await response.json();
console.log(data);
setUser(data)
setMentor(data)
if(!data){
    console.log("data is not fetch")
}
    }
catch(error){
    console.log(error);
}
    }
    getUserDetails();

   },[])
   
   
    return(
        <AppContext.Provider
        value={{
            user,
            setUser,
            mentor,
            setMentor
        }}
        >

            {children}
        </AppContext.Provider>

    )
}

export const AppState=()=>{
    return useContext(AppContext)
}