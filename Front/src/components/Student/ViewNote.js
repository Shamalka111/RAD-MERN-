import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ViewNote=()=>{

    const [note, SetNote]=useState([]);

    useEffect(()=>{
        loadNote();     
    },
    []
    )

    const loadNote=async()=>{
        const result = await axios.get('http://localhost:8080/notes/');
        SetNote(result.data)
    }

    const deletenote=async(id)=>{
        const result = await axios.delete('http://localhost:8080/notes/del-note/'+id)
        .then((result)=>{
                loadNote()  
        }).catch(()=>{
            alert('Could Not delete')
        })
    }

    return(

        <div className='container forms'>
            
        <div className='row'>
        <div className='col-md-12 text-center'><h2>List Notes</h2></div>
        
        </div>

        <table className="table">
            <thead>
                <th>Title</th>
                <th>Description</th>

            </thead>
          
            <tbody>
                {note.map((note,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        
                        <td><Link to ={`edit-note/${note._id}`} ><button className="btn btn-primary">EDIT</button></Link></td>
                        <td><button className="btn btn-danger" onClick={()=>deletenote(note._id)}>DELETE</button></td>
                    </tr>
                    ))
                }
            </tbody>

        </table>
        <div>
        <button className="btn btn-primary"><Link class="nav-link" to='/add-note' >Add Note</Link></button>
        </div>
        
        </div>
    )
}

export default ViewNote;