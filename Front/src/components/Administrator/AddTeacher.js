import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

const AddTeacher=()=>{
    const [teacher, SetTeacher]=useState((
        {
            'first_name':'',
            'last_name':'',
            'age': 0,
            'address':'',
        }
    ))

const [message, setMessage]=useState('');

const{first_name,last_name,age,address}=teacher;

const HandleChange=((e)=>{
    SetTeacher({...teacher,[e.target.name]: e.target.value})
})

const submitForm= (e)=>{
    e.preventDefault();
    
    axios.post('http://localhost:8080/teacher/add-teacher',teacher)
    .then((result)=>{

        console.log(result);
        //setMessage("Successfully Added");
        alert("Successfully Added");

    }).catch((err)=>{
        alert(err.message);
        //console.log(err.message);
    });
}   
    
return(

        <div className='container forms'>
            <form onSubmit={e => submitForm(e)}>
        <div className='row'>
        <div className='col-md-12 text-center'><h2>Add Teacher</h2></div>
        </div>

        <div className='row'>
        <div className='col-md-12 text-center'><h2>{message}</h2></div>
        </div>

        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>First Name</div>
        <div className='col-md-4'><input type="text" name='first_name' 
        value={first_name} className='form-control' onChange={e=>HandleChange(e)} /></div>
        <div className='col-md-2'></div>
        </div>

        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Last Name</div>
        <div className='col-md-4'><input type="text" name='last_name' 

        value={last_name} onChange={e=>HandleChange(e)} className='form-control' /></div>
        <div className='col-md-2'></div>
        </div>


        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Age</div>
        <div className='col-md-4'><input type="number" name='age' 

        value={age} onChange={e=>HandleChange(e)} className='form-control' /></div>
        <div className='col-md-2'></div>
        </div>


        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Address</div>
        <div className='col-md-4'><input type="text" name='address' 

        value={address} onChange={e=>HandleChange(e)} className='form-control' /></div>
        <div className='col-md-2'></div>
        </div>

        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8 text-center'>
            <button className='btn btn-warning' >Add Teacher</button>
            <br/><br/>
            <button className="btn btn-primary"><Link class="nav-link" to='/view-teacher' >View Teacher</Link></button>         
        </div>
        <div className='col-md-2'></div>
        </div>
        
        </form>
        </div>

    )
}

export default AddTeacher;