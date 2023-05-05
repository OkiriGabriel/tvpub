import React from "react";
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import {container} from 'react-bootstrap';

const User = () => {
    return (
        <div>
            <Navbar />
           <div className="user">
                <div className="container">
                        <div className="d-flex justify-content-between">
                            <h5>User</h5>
                            <Button className='fs-small my-button-modal3'>Invite User</Button>
                        </div>
                    <div className="admin d-flex justify-content-between w-50 mt-5">
                       <div className="d-flex">
                            <img src="../images/Rectangle 105.png" />
                            <div className="m-3">
                                <p className="mb-0">Lanre313@gmail.com</p>
                                <p>Isaac Shokunbi</p>
                            </div>
                       </div>

                       <div>
                            <p className="fs-xsmall mt-5">Administration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User