import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditCourse=()=>{

    const {id} = useParams();
    const history = useNavigate();
    const [course, SetCourse]=useState((
        {
            'courseName':'',
<<<<<<< HEAD
            'noOfCredits':'',
=======
            'noOfCredits':0,
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
            'duration': '',
            'conductedBy':'',
        }
    ))
    const [message, setMessage]=useState('');

    const{courseName,noOfCredits,duration,conductedBy}=course;
    

    useEffect(()=>{
        loadCourse();     
    },
    []
    )

    const loadCourse=async()=>{
<<<<<<< HEAD
        const result = await axios.get('http://localhost:8080/course/course/'+id);
=======
        const result = await axios.get('http://localhost:8080/teacher/course/'+id);
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
        SetCourse(result.data)
    }
   
    const HandleChange=((e)=>{
        SetCourse({...course,[e.target.name]: e.target.value})
    })

    const submitForm=async(e)=>{
        e.preventDefault()
    
<<<<<<< HEAD
        await axios.put('http://localhost:8080/course/update-course/'+id,course)
        .then((result)=>{
    
            setMessage("Successfully Updated");
            history('/view-course');
=======
        await axios.put('http://localhost:8080/teacher/update-course/'+id,course)
        .then((result)=>{
    
            setMessage("Successfully Updated");
            history('/');
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
    
        }).catch((err)=>{
            alert('Something went Wrong!');
        });
    }   

    return(

        <div className='container forms'>
        <form onSubmit={e => submitForm(e) }>
            <div className='row'>
                <div className='col-md-12 text-center'><h2>Edit Course</h2></div>
            </div>

            <div className='row'>
                <div className='col-md-12 text-center'><h2>{message}</h2></div>
            </div>
            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Course Name</div>
            <div className='col-md-4'><input type="text" name='courseName' value={courseName}
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>

            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>No of Credits</div>
            <div className='col-md-4'><input type="number" name='noOfCredits' value={noOfCredits} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>


            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Duration</div>
            <div className='col-md-4'><input type="text" name='duration' value={duration} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>


            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>conductedBy</div>
            <div className='col-md-4'><input type="text" name='conductedBy' value={conductedBy} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>


            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
                <button className='btn btn-warning' >Edit Course</button>         
            </div>
            <div className='col-md-2'></div>
            </div>

            </form>
        </div>
    )
}

<<<<<<< HEAD
export default EditCourse;

=======
<<<<<<<< HEAD:Changes/EditCourse.js
export default EditCourses;
========
export default EditCourse;
>>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff:Front/src/components/Teacher/EditCourse.js
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
