import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ViewTeacher=()=>{

    const [teacher, SetTeacher]=useState([]);

    useEffect(()=>{
        loadTeacher();     
    },
    []
    )

    const loadTeacher=async()=>{
        const result = await axios.get('http://localhost:8080/admin/teacher');
        SetTeacher(result.data)
    }

    const deleteuser=async(id)=>{
        const result = await axios.delete('http://localhost:8080/admin/del-teacher/'+id)
        .then((resul)=>{
                loadTeacher()  
        }).catch(()=>{
            alert('Could Not delete')
        })
    }

    return(

        <div className='container forms'>
        <div className='row'>
        <div className='col-md-12 text-center'><h2>List Teacher</h2></div>
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
                {teacher.map((teacher,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{teacher.first_name}</td>
                        <td>{teacher.last_name}</td>
                        <td>{teacher.age}</td>
                        <td>{teacher.address}</td>
                        <td><Link to ={`edit-teacher/${teacher._id}`} ><button className="btn btn-primary">EDIT</button></Link></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteuser(teacher._id)}>DELETE</button></td>
                    </tr>
                    ))
                }
            </tbody>

        </table>
        
        </div>
    )
}

export default ViewTeacher;