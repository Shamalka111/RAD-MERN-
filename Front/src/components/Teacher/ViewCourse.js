import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ViewCourse=()=>{

    const [course, SetCourse]=useState([]);

    useEffect(()=>{
        loadCourse();     
    },
    []
    )

    const loadCourse = async()=>{
        const result = await axios.get('http://localhost:8080/teacher/course');
        SetCourse(result.data)
    }

    const deletecourse=async(id)=>{
        const result = await axios.delete('http://localhost:8080/teacher/del-course/'+id)
        .then((resul)=>{
                loadCourse()  
        }).catch(()=>{
            alert('Could Not delete')
        })
    }

    return(

        <div className='container forms'>
        <button className="btn btn-primary"><Link class="nav-link" to='/add-course' >Add Course</Link></button>    
        <div className='row'>
        <div className='col-md-12 text-center'><h2>List Course</h2></div>
        
        </div>

        <table className="table">
            <thead>
                <th>Sr.No</th>
                <th>Course Name</th>
                <th>No Of Credits</th>
                <th>Duration</th>
                <th>Conducted By</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </thead>
          
            <tbody>
                {course.map((course,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{course.courseName}</td>
                        <td>{course.noOfCredits}</td>
                        <td>{course.duration}</td>
                        <td>{course.conductedBy}</td>
                        <td><Link to ={`edit-course/${course._id}`} ><button className="btn btn-primary">EDIT</button></Link></td>
                        <td><button className="btn btn-danger" onClick={()=>deletecourse(course._id)}>DELETE</button></td>
                    </tr>
                    ))
                }
            </tbody>

        </table>
        
        </div>
    )
}

export default ViewCourse;