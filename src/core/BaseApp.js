import React from 'react';
import { useHistory } from 'react-router-dom';



export function BaseApp({title,children}){

    const history = useHistory();

    return(
    <div>
        <div>
            <div className='side-bar'> 
            <h3>CRUD OPERATION</h3>
            <button 
            onClick={()=>history.push("/")}
            className='dash-btn'>Students</button>

            <button 
            onClick={()=>history.push("/add/user")}
            className='adduser-btn'>AddUser</button>{" "}

              <button 
            onClick={()=>history.push("/teacher")}
            className='adduser-btn'>Teachers</button>{" "}

            <button 
            onClick={()=>history.push("/add/teacher")}
            className='adduser-btn'>AddTeacher</button>

            </div>
            <div className='title'>{title}</div>
        </div>

        <div className='children'> {children}
       
        <footer className='footer'>
            <div>Copyright @ 2023</div>
            <div>mobile no-848***134</div>
            <div>karthick18696@gmail.com</div>
        </footer>
        </div>
       
        </div>
    )
}