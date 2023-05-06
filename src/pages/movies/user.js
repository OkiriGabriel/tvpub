import React from "react";
import Navbar from '../../components/Navbar';
import Btn from '../../components/Button';
import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput } from '@mantine/core';

const User = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <Navbar />
           <div className="user">
                <div className="container">
                        <div className="d-flex justify-content-between">
                            <h5>User</h5>
                            <Btn className='fs-small my-button-modal3' onClick={open}>Invite User</Btn>
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
        <Modal opened={opened} onClose={close} title="Invite Account" centered>
            <TextInput label="Email Address" placeholder="Tap to edit" />
        </Modal>
        </div>


    )
}

export default User