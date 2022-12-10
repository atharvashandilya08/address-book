import React from 'react'
import { Link } from 'react-router-dom';
function CollapseNav() {
    return (
        <div className='groups'>
            <a className="btn hamburger text-center bg-light" data-bs-toggle="collapse" href="#groups" role="button" aria-expanded="false" aria-controls="collapseExample">
                <i class="fa-solid fa-bars text-center"></i>
            </a>
            <div id="groups" className='bg-light collapse'>
                <ul>
                    <li className='purple-text'><Link to="/favourites">Favourites</Link></li>

                    <li className='purple-text'><Link to="/friends">Friends</Link></li>


                    <li className='purple-text'><Link to="/family">Family</Link></li>

                    <li className='purple-text'><Link to="/work">Work</Link></li>

                    <li className='purple-text'><Link to="/school">School</Link></li>
                </ul>
                <footer>
                    <i class="fa-solid fa-circle-plus"></i>
                </footer>
            </div>

        </div>
    );
};
export default CollapseNav;
