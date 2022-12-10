import React from 'react'
const Card = props => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.heading);
        alert("Copied text "+props.heading);
    }
    return (
        <span onClick={copyToClipboard}>
            <div className="contact-box">
                <h3 className='card-heading'>{props.heading}</h3>
                <i class="fa-solid fa-trash-can card-icon"></i>
                <i class="fa-solid fa-pen-to-square card-icon"></i>
            </div>
        </span>
    )
}
export default Card;
