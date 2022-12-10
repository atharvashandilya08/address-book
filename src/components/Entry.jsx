import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function Entry() {
    return (
        <div className="entry">
            <Navbar />
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Person" className="circular-image contact-entry" id="profile-picture" />
            <div className="container profile text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="full-name" id="full-name" placeholder='Name' className='profile-full-row' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="company-or-school" id="company-or-school" placeholder='Company/School' className='profile-half-row' />
                        <input type="text" name="group" id="group" placeholder='Group' className='profile-half-row' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="tel" name="phone" id="phone" placeholder='Phone' className='profile-half-row' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        <input type="email" name="email" id="email" placeholder='Email' className='profile-half-row' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" name="full-address" id="full-address" placeholder='Address' className='profile-full-row' />
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
            <Link to="/book" className="discard">Discard</Link>
            <Link to="/book" className="save">Save</Link>
        </div>
    );
};
export default Entry;
