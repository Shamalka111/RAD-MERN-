import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditNote=()=>{

    const {id} = useParams();
    const history = useNavigate();
    const [note, SetNote]=useState((
        {
            'title':'',
            'description':''
        }
    ))
    const [message, setMessage]=useState('');

    const{title,description}=note;
    

    useEffect(()=>{
        loadNote();     
    },
    []
    )

    const loadNote=async()=>{
        const result = await axios.get('http://localhost:8080/notes/'+id);
        SetNote(result.data)
    }
   
    const HandleChange=((e)=>{
        SetNote({...note,[e.target.name]: e.target.value})
    })

    const submitForm=async(e)=>{
        e.preventDefault()
    
        await axios.put('http://localhost:8080/notes/update-note/'+id,note)
        .then((result)=>{
    
            setMessage("Successfully Updated");
            history('/view-notes');
    
        }).catch((err)=>{
            alert('Something went Wrong!');
        });
    }   

    return(

        <div className='container forms'>
        <form onSubmit={e => submitForm(e) }>
            <div className='row'>
                <div className='col-md-12 text-center'><h2>Edit Note</h2></div>
            </div>

            <div className='row'>
                <div className='col-md-12 text-center'><h2>{message}</h2></div>
            </div>
            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Title</div>
            <div className='col-md-4'><input type="text" name='title' value={title}
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>

            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>Description</div>
            <div className='col-md-4'><textarea type="text"  name='description' value={description} 
            onChange={e=>HandleChange(e)} className='form-control' /></div>
            <div className='col-md-2'></div>
            </div>



            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
                <button className='btn btn-warning' >Edit Note</button>         
            </div>
            <div className='col-md-2'></div>
            </div>

            </form>
        </div>
    )
}

export default EditNote;