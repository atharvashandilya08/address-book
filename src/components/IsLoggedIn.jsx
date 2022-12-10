import React from 'react'
import CollapseNav from './CollapseNav';
import Navbar from './Navbar';
function IsLoggedIn() {
    return (
        <div id="isLoggedIn">
            <Navbar />

            <CollapseNav />
            <h1 className='text-left first-steps-h'>First Steps</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blue">
                            <h1 className='x-large'>Add an address</h1>
                            <h4 className='large'>Add an address into your book</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="red">
                            <h1 className='x-large'>View your book</h1>
                            <h4 className='large'>View your book and use it</h4>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="green">
                            <h1 className='x-large'>Add a new group</h1>
                            <h4 className='large'>Add a new group to sort out the people</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="yellow">
                            <h1 className='x-large'>Share them</h1>
                            <h4 className='large'>Select an address and click it to share</h4>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};
export default IsLoggedIn;
