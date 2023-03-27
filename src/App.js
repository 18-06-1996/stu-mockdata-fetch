
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddTeacher } from './Components/AddTeacher';
import { AddUser } from './Components/AddUser';
import { EditTeacher } from './Components/EditTeacher';
import { EditUser } from './Components/EditUser';
import { TeacherComponent } from './Components/TeacherComponents';
import { TeacherDetails } from './Components/TeacherDetails';
import { UserComponent } from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import { AppState } from './context/AppProvider';
import { BaseApp } from './core/BaseApp';
import { data } from './Data/Data';
import { dataTeacher } from './Data/DataTeacher';

function App() {
  
  return (
    <div className="App">
     
     <Switch>

<Route exact path="/">
    <UserComponent/>
</Route>

<Route  path="/teacher">
    <TeacherComponent/>
</Route>

<Route  path="/add/user">
    <AddUser />
</Route>

<Route  path="/add/teacher">
    <AddTeacher />
</Route>


<Route  path="/user/:id">
    <UserDetails />
</Route>

<Route  path="/teachers/:id">
    <TeacherDetails />
</Route>

<Route  path="/edit/:id">
    <EditUser/>
</Route>

<Route  path="/editer/:id">
    <EditTeacher/>
</Route>


     </Switch>
    
      

    </div>
  );
}

export default App;
