import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import AddStudent from './components/Officer/AddStudent';
import ViewStudent from './components/Officer/ViewStudent';
import EditStudent from './components/Officer/EditStudent';

<<<<<<< HEAD
import AddTeacher from './components/Administrator/AddTeacher';
import EditTeacher from './components/Administrator/EditTeacher';
import ViewTeacher from './components/Administrator/ViewTeacher';


import ViewCourse from './components/Teacher/ViewCourse';
import AddCourse from './components/Teacher/AddCourse';
import EditCourse from './components/Teacher/EditCourse';


=======
import AddCourse from './components/Teacher/AddCourse';
import ViewCourse from './components/Teacher/ViewCourse';
import EditCourse from './components/Teacher/EditCourse';

import AddNote from './components/Student/AddNote';
import ViewNote from './components/Student/ViewNote';
import EditNote from './components/Student/EditNote';
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff

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

<<<<<<< HEAD
            <Route path="/view-teacher" element={<ViewTeacher/>} />
            <Route path="/add-teacher" element={<AddTeacher/>} />
            <Route path="/edit-teacher/:id" element={<EditTeacher/>} />

            <Route path="/view-course" element={<ViewCourse/>} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/edit-course/:id" element={<EditCourse/>} />

=======
            <Route path="/edit-course/:id" element={<EditCourse/>} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/view-course" element={<ViewCourse/>} />

            <Route path="/view-notes/edit-note/:id" element={<EditNote/>} />
            <Route path="/add-note" element={<AddNote/>} />
            <Route path="/view-notes" element={<ViewNote/>} />
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff

        </Routes>

        </Router>
        </>
    )
}

export default Home;