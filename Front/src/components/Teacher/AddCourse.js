import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AddCourse=()=>{
    const [course, SetCourse]=useState((
        {
            'courseName':'',
            'noOfCredits':0,
            'duration': '',
            'conductedBy':'',
        }
    ))

const [message, setMessage]=useState('');

const{courseName,noOfCredits,duration,conductedBy}=course;

const HandleChange=((e)=>{
    SetCourse({...course,[e.target.name]: e.target.value})
})

const submitForm= (e)=>{
    e.preventDefault();
    
    axios.post('http://localhost:8080/course/add-course',course)
    .then((result)=>{

        console.log(result);
        //setMessage("Successfully Added");
        alert("Successfully Added");

    }).catch((err)=>{
        alert('Something went Wrong!');
    });
}   
    
return(

        <div className='container forms'>
            <button className="btn btn-primary"><Link class="nav-link" to='/view-course' >View Course</Link></button>
            <form onSubmit={e => submitForm(e)}>
        <div className='row'>
        <div className='col-md-12 text-center'><h2>Add Course</h2></div>
        </div>

        <div className='row'>
        <div className='col-md-12 text-center'><h2>{message}</h2></div>
        </div>

        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Course Name</div>
        <div className='col-md-4'><input type="text" name='courseName' 
        value={courseName} className='form-control' onChange={e=>HandleChange(e)} /></div>
        <div className='col-md-2'></div>
        </div>

        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>No of Credits</div>
        <div className='col-md-4'><input type="number" name='noOfCredits' 

        value={noOfCredits} onChange={e=>HandleChange(e)} className='form-control' /></div>
        <div className='col-md-2'></div>
        </div>


        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Duration</div>
        <div className='col-md-4'><input type="text" name='duration' 

        value={duration} onChange={e=>HandleChange(e)} className='form-control' /></div>
        <div className='col-md-2'></div>
        </div>


        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Conducted By</div>
        <div className='col-md-4'><input type="text" name='conductedBy' 

        value={conductedBy} onChange={e=>HandleChange(e)} className='form-control' /></div>
        <div className='col-md-2'></div>
        </div>

        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8 text-center'>
            <button className='btn btn-warning' >Add Course</button> 
            <br/>
            <br/>
                    
        </div>
        <div className='col-md-2'></div>
        </div>
        </form>
        <div>
        <button className="btn btn-primary"><Link class="nav-link" to='/view-course' >View Course</Link></button>
        </div>
        </div>

    )
}

export default AddCourse;