import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import AddStudent from './components/Officer/AddStudent';
import ViewStudent from './components/Officer/ViewStudent';
import EditStudent from './components/Officer/EditStudent';

import AddCourse from './components/Teacher/AddCourse';
import ViewCourse from './components/Teacher/ViewCourse';
import EditCourse from './components/Teacher/EditCourse';

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

            <Route path="/edit-course/:id" element={<EditCourse/>} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/view-course" element={<ViewCourse/>} />

        </Routes>

        </Router>
        </>
    )
}

export default Home;