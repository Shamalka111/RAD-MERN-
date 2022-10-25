import { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";


const EditStudent=()=>{

    const {id} = useParams();
    const history = useNavigate();
    const [student, SetStudent]=useState((
        {
            'first_name':'',
            'last_name':'',
            'age':'',
            'address':'',
        }
    ))
    const [message, setMessage]=useState('');

    const{first_name,last_name,age,address}=student;
    

    useEffect(()=>{
        loadStudent();     
    },
    []
    )

    const loadStudent=async()=>{
        const result = await axios.get('http://localhost:8080/admin/student/'+id);
        SetStudent(result.data)
    }
   
    const HandleChange=((e)=>{
        SetStudent({...student,[e.target.name]: e.target.value})
    })

    const submitForm=async(e)=>{
        e.preventDefault()
    
        await axios.put('http://localhost:8080/admin/update-student/'+id,student)
        .then((result)=>{
    
            setMessage("Successfully Updated");
            history('/view-student');
    
        }).catch((err)=>{
            alert('Something went Wrong!');
        });
    }   

    return(

        <div className='container forms'>
        <form onSubmit={e => submitForm(e) }>
            <div className='row'>
                <div className='col-md-12 text-center'><h2>Edit Student</h2></div>
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
            <td><button className='btn btn-warning' >Edit Student</button></td>         
            </div>
            <div className='col-md-2'></div>
            </div>

            </form>
        </div>
    )
}

export default EditStudent;