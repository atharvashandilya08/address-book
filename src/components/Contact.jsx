import React from 'react'
import Navbar from './Navbar';
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from 'react-tooltip';
function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <div className="main-page">

                <h1 className='text-center purple-text contact-heading'>Contact Me</h1>
                <div className="container contact-icons">
                    <div className="row">
                        <div className="col-lg-4">


                            <span id="Whatsapp" data-tip="Whatsapp: (+91)-7048691302"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png' width={"100px"} /></span>
                            <ReactTooltip />

                        </div>
                        <div className="col-lg-4">
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCBkQsLTvhPdZwLkFCHzwKxgGxGmjgRzdHmQMlLdlzXKJzntwRCLgmFrjHRvgNSGGLrgdV" data-tip="Mail: atharvashandilya5@gmail.com"><img src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' width={"100px"} /></a>
                            <ReactTooltip />
                        </div>
                        <div className="col-lg-4">
                            <a href="https://github.com/atharva-bhai" data-tip="Github: atharva-bhai"><img src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' width={"100px"} /></a>
                            <ReactTooltip />
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};
export default Contact;
