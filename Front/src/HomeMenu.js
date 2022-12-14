import {Link} from 'react-router-dom';

const Menu=()=>{

    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <!-- <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home' >Home</Link>
                </li> --> */}
                <li className="nav-item">
                <Link className="nav-link" to='/view-notes' >Student</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/view-course' >Teacher</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/view-teacher' >Admin</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to='/view-student' >Officer</Link>
                </li>    
            </ul>
            
            </div>
        </div>
        </nav>
        )
}

export default Menu;
