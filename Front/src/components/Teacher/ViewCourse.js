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
<<<<<<< HEAD
        const result = await axios.get('http://localhost:8080/course/course');
=======
        const result = await axios.get('http://localhost:8080/teacher/course');
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
        SetCourse(result.data)
    }

    const deletecourse=async(id)=>{
<<<<<<< HEAD
        const result = await axios.delete('http://localhost:8080/course/del-course/'+id)
=======
        const result = await axios.delete('http://localhost:8080/teacher/del-course/'+id)
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
        .then((resul)=>{
                loadCourse()  
        }).catch(()=>{
            alert('Could Not delete')
        })
    }

    return(

        <div className='container forms'>
<<<<<<< HEAD
       
=======
        <button className="btn btn-primary"><Link class="nav-link" to='/add-course' >Add Course</Link></button>    
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
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
<<<<<<< HEAD
                        <td><Link to ={`/edit-course/${course._id}`} ><button className="btn btn-primary">EDIT</button></Link></td>
=======
                        <td><Link to ={`edit-course/${course._id}`} ><button className="btn btn-primary">EDIT</button></Link></td>
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
                        <td><button className="btn btn-danger" onClick={()=>deletecourse(course._id)}>DELETE</button></td>
                    </tr>
                    ))
                }
            </tbody>

        </table>
<<<<<<< HEAD
        <div>
        <button className="btn btn-primary"><Link class="nav-link" to='/add-course' >Add Course</Link></button>    
        </div>
=======
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
        
        </div>
    )
}

export default ViewCourse;