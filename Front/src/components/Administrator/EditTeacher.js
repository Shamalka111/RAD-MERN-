import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditTeacher=()=>{

    const {id} = useParams();
    const history = useNavigate();
    const [teacher, SetTeacher]=useState((
        {
            'first_name':'',
            'last_name':'',
            'age':'',
            'address':'',
        }
    ))
    const [message, setMessage]=useState('');

    const{first_name,last_name,age,address}=teacher;
    

    useEffect(()=>{
        loadTeacher();     
    },
    []
    )

    const loadTeacher=async()=>{
        const result = await axios.get('http://localhost:8080/teacher/teacher/'+id);
        SetTeacher(result.data)
    }
   
    const HandleChange=((e)=>{
        SetTeacher({...teacher,[e.target.name]: e.target.value})
    })

    const submitForm=async(e)=>{
        e.preventDefault()
    
        await axios.put('http://localhost:8080/teacher/update-teacher/'+id,teacher)
        .then((result)=>{
    
            setMessage("Successfully Updated");
            history('/view-teacher');
    
        }).catch((err)=>{
            alert('Something went Wrong!');
        });
    }   

    return(

        <div className='container forms'>
        <form onSubmit={e => submitForm(e) }>
            <div className='row'>
                <div className='col-md-12 text-center'><h2>Edit Teacher</h2></div>
            </div>

            <div className='row'>
                <div className='col-md-12 text-center'><h2>{message}</h2></div>
            </div>
            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>First Name</div>
            <div className='col-md-4'><input type="text" name='first_name' value={first_name}
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>

            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Last Name</div>
            <div className='col-md-4'><input type="text" name='last_name' value={last_name} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>


            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Age</div>
            <div className='col-md-4'><input type="number" name='age' value={age} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>


            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Address</div>
            <div className='col-md-4'><input type="text" name='address' value={address} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>


            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
            <button className='btn btn-warning' >Edit Teacher </button>         
            </div>
            <div className='col-md-2'></div>
            </div>

            </form>
        </div>
    )
}

export default EditTeacher;