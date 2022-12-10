import React from 'react'
import Navbar from './Navbar';
import me from "../images/atharva.jpeg"
function About(){
    return (
        <div className="about">
            <Navbar/>
            <div className="left-part">
                <div className="profile-about">
                <img src={me} alt="My Picture" />
                </div>
                
                <h1 className='about-heading mt-3'>I am Atharva</h1>
                <p className='about-subheading mt-2 w-75'>Studying in 8th grade Agile Shaala</p>
            </div>
            <div className="right-part">
                <h3 className='right-heading'>The reason for making this website</h3>
                <p className='reason'>I made this website with the help of Srinath Sir. I made this website as it was a nice project with a lot of technologies to learn. I would like to thank Srinath sir for helping me to make this website</p>
                <h3>Tools which I used:</h3>
                <ul className="list-group">
                    <li className="list-group-item strengths">React (Frontend and communication with database) <i class="fa-brands fa-react"></i></li>
                    <li className="list-group-item strengths">NodeJS (Making the database a bit more accessible) <i class="fa-brands fa-node"></i></li>
                    <li className="list-group-item strengths">MongoDB (Database) <i class="fa-solid fa-database"></i></li>
                    <li className="list-group-item strengths">CSS (Styling) <i class="fa-brands fa-css3-alt"></i></li>
                </ul>
            </div>
        </div>
    
    );
};
export default About;
