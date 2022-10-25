import {Link} from 'react-router-dom';

const Menu=()=>{

    return(
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <!-- <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/home' >Home</Link>
                </li> --> */}
                <li class="nav-item">
                <Link class="nav-link" to='/view-notes' >Student</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/view-course' >Teacher</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/view-teacher' >Admin</Link>
                </li>
                <li class="nav-item">
                 <Link class="nav-link" to='/view-student' >Officer</Link>
                </li>    
            </ul>
            
            </div>
        </div>
        </nav>
        )
}

export default Menu;