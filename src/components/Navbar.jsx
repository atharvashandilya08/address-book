import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/book">Address Book</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><span className='nav-text'>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about"><span className='nav-text'>About</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact"><span className='nav-text'>Contact</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active"><span className='nav-text'>Sign Out</span></Link>
                        </li>
                    </ul>
                        <Link to="/search" className='nav-link'><i className="fa-solid fa-magnifying-glass search-icon"></i></Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
