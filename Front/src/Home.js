import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import AddStudent from './components/Officer/AddStudent';
import ViewStudent from './components/Officer/ViewStudent';
import EditStudent from './components/Officer/EditStudent';
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

        </Routes>

        </Router>
        </>
    )
}

export default Home;