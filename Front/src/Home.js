import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import AddStudent from './components/Officer/AddStudent';
import ViewStudent from './components/Officer/ViewStudent';
import EditStudent from './components/Officer/EditStudent';

import AddTeacher from './components/Administrator/AddTeacher';
import EditTeacher from './components/Administrator/EditTeacher';
import ViewTeacher from './components/Administrator/ViewTeacher';


import HomeMenu from './HomeMenu';   //css


const Home=()=>{
    return(
     
       <>
        <Router>
        <HomeMenu/>
        <Routes>
            <Route path="/edit-student/:id" element={<EditStudent/>} />
            <Route path="/add-student" element={<AddStudent/>} />
            <Route path="/view-student" element={<ViewStudent/>} />

            <Route path="/view-teacher" element={<ViewTeacher/>} />
            <Route path="/add-teacher" element={<AddTeacher/>} />
            <Route path="/edit-teacher/:id" element={<EditTeacher/>} />


        </Routes>

        </Router>
        </>
    )
}

export default Home;