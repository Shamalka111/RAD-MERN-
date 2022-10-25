import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AddNote = () => {
    const [note, SetNote] = useState((
        {
            'title': '',
            'description': ''
        }
    ))

    const [message, setMessage] = useState('');

    const { title, description,  } = note;

    const HandleChange = ((e) => {
        SetNote({ ...note, [e.target.name]: e.target.value })
    })

    const submitForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/notes/add-note', note)
            .then((result) => {

                console.log(result);
                //setMessage("Successfully Added");
                alert("Successfully Added");

            }).catch((err) => {
                alert('Something went Wrong!');
            });
    }

    return (

        <div className='container forms'>
           
            <form onSubmit={e => submitForm(e)}>
                <div className='row'>
                    <div className='col-md-12 text-center'><h2>Add Note</h2></div>
                </div>

                <div className='row'>
                    <div className='col-md-12 text-center'><h2>{message}</h2></div>
                </div>

                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Title</div>
                    <div className='col-md-4'><input type="text" name='title'
                        value={title} className='form-control' onChange={e => HandleChange(e)} /></div>
                    <div className='col-md-2'></div>
                </div>

                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Description</div>
                    <div className='col-md-4'><textarea type="text" name='description'

                        value={description} onChange={e => HandleChange(e)} className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>



                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center'>
                        <button className='btn btn-warning' >Add Note</button>
                        <br/><br/>
                        <button className="btn btn-primary"><Link class="nav-link" to='/view-notes' >View Note</Link></button>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </form>
        </div>

    )
}

export default AddNote;