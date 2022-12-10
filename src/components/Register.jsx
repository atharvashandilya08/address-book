import React from 'react'
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div id="log-in" className='text-center'>
            <h1 className='register-heading'>Register</h1>

            <form action="/register" className="log-in">
                <img alt="Register with Google" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="login-icon" />
                <input type="text" className='login-input' placeholder='Username' />
                <br />
                <img alt="Register with Facebook" src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="login-icon" />
                <input type="email" className='login-input' placeholder='Email' />
                <br />
                <img alt="Register with GitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="login-icon" />
                <input type="password" className='login-input' placeholder='Password' />
                <br />

                <button type="submit" className='log-in-button'>Register</button>
                <br />
                <p className='or'>or</p>
                <br />

                <Link className='alternative-login-link' to="/log-in">Login</Link>
            </form>
        </div>
    );
};
export default Register;
