import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ViewStudent=()=>{

    const [student, SetStudent]=useState([]);

    useEffect(()=>{
        loadStudent();     
    },
    []
    )

    const loadStudent=async()=>{
        const result = await axios.get('http://localhost:8080/admin/student');
        SetStudent(result.data)
    }

    const deleteuser=async(id)=>{
        const result = await axios.delete('http://localhost:8080/admin/del-student/'+id)
        .then((resul)=>{
                loadStudent()  
        }).catch(()=>{
            alert('Could Not delete')
        })
    }

    return(

        <div className='container forms'>
            
        <div className='row'>
        <div className='col-md-12 text-center'><h2>List Student</h2></div>
        
        </div>

        <table className="table">
            <thead>
                <th>Sr.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </thead>
          
            <tbody>
                {student.map((student,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td><Link to ={`edit-student/${student._id}`} ><button className="btn btn-primary">EDIT</button></Link></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteuser(student._id)}>DELETE</button></td>
                    </tr>
                    ))
                }
            </tbody>

        </table>
        <div>
        <button className="btn btn-primary"><Link class="nav-link" to='/add-student' >Add Student</Link></button>
        </div>
        
        </div>
    )
}

export default ViewStudent;