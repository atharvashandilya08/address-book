import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Card from './Card';
function Book(props) {
    const [short, setShort] = useState(true);
    const { books } = props;
    const firstThree = books.slice(0, 3);
    // const {params} = useParams();
    let { groupName } = useParams();
    if (groupName) { groupName = groupName[0].toUpperCase() + groupName.slice(1).toLowerCase(); }
    if (!groupName) {
        groupName = "Your Contacts";
        console.log(groupName);
    }
    const toggleMode = () => {
        if (short) {
            setShort(false);
        } else {
            setShort(true);
        }
    }

    return (
        <div className='text-center'>
            <Navbar />
            <h1 className='purple-text text-center about-heading'>{groupName}</h1>
            <Link to="/create"><i class="fa-solid fa-circle-plus add"></i></Link>
            {short
                ? firstThree.map((book, index) =>
                    <Card key={index} heading={book.name} />)
                : books.map((book, index) =>
                    <Card key={index} heading={book.name} />)}
            <span className="view" onClick={toggleMode}>
                <h2 className="color-purple">{short ? "View More" : "View Less"}</h2>
            </span>
        </div>
    )



};
export default Book;
