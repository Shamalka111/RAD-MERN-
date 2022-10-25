import './App.css';
import Menu from './Menu';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import AddStudent from './components/Officer/AddStudent';
import ViewStudent from './components/Officer/ViewStudent';
import EditStudent from './components/Officer/EditStudent';
import Header from './Header';
import Home from './Home';
// import Student from './Student';
// import Teacher from './Teacher';
// import Course from './Course';
// import Officer from './Officer';


function App() {
  return (
    <>
    <Router>
    <Menu/>
    <Routes>
      {/* <Route path="/view-student" element={<ViewStudent/>} /> */}
      <Route path="/home" element={<Home/>} />
      {/* <Route path="/student" element={<Student/>} />
      <Route path="/teacher" element={<Teacher/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/officer" element={<Officer/>} /> */}
      {/* <Route path="/student" element={<Student/>} /> */}
      {/* <Route path="/add-student" element={<AddStudent/>} />
      <Route path="/edit-student/:id" element={<EditStudent/>} /> */}

    {/* <div className='container'>
  
      <Header/>
    </div> */}
    </Routes>

    </Router>

    </>
  );
}

export default App;
