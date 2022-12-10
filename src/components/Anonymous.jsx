import React from 'react'
import { Link } from 'react-router-dom';
import book from "../images/book.png";
function Anonymous() {
    return (
        <div className="home-anonymous">
            <div className="top-bar">
                <h3 className="brand-text"><a href="/book" className="brand-link">ADDRESS BOOK</a></h3>
                <Link to="/register" className="btn sign-in">Sign In/Register</Link>
            </div>
            <div className="heading">
                <h1 className="big-heading">Address Taking made easy for you</h1>
                <p className="small-subtitle">You can make Address Taking way easier than you think</p>
            </div>
            <img src={book} alt="Book" className="book-img" id="book" />
        </div>
    );
};
export default Anonymous;
