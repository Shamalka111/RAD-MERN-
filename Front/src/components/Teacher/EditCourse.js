import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditCourse=()=>{

    const {id} = useParams();
    const history = useNavigate();
    const [course, SetCourse]=useState((
        {
            'courseName':'',
            'noOfCredits':'',
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
        const result = await axios.get('http://localhost:8080/course/course/'+id);
        SetCourse(result.data)
    }
   
    const HandleChange=((e)=>{
        SetCourse({...course,[e.target.name]: e.target.value})
    })

    const submitForm=async(e)=>{
        e.preventDefault()
    
        await axios.put('http://localhost:8080/course/update-course/'+id,course)
        .then((result)=>{
    
            setMessage("Successfully Updated");
            history('/view-course');
    
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

export default EditCourse;

