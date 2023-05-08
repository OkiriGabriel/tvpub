import React from "react";
import Navbar from '../../components/Navbar';
import Btn from '../../components/Button';
import { useDisclosure } from '@mantine/hooks';
import { Radio } from '@mantine/core';
import { Modal, TextInput } from '@mantine/core';

const User = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <Navbar />
           <div className="user">
                <div className="container">
                        <div className="d-flex justify-content-between mt-4">
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
           <div className="user">
                <div className="container">
                    <div className="admin d-flex justify-content-between w-75">
                       <div className="d-flex">
                            <img src="../images/Rectangle 105 (2).png" />
                            <div className="m-3">
                                <p className="mb-0">nathan.roberts@example.com</p>
                                <p>Annette Black</p>
                            </div>
                       </div>

                       <div>
                            <p className="fs-xsmall mt-5">Editor</p>
                        </div>
                       <div className="remove-link">
                            <a href="#" className="fs-xsmall">Remove user</a>
                        </div>
                    </div>
                </div>
            </div>
           <div className="user">
                <div className="container">
                    <div className="admin d-flex justify-content-between w-75">
                       <div className="d-flex">
                            <img src="../images/Rectangle 105 (3).png" />
                            <div className="m-3">
                                <p className="mb-0">nathan.roberts@example.com</p>
                                <p>Dianne Russell</p>
                            </div>
                       </div>

                       <div>
                            <p className="fs-xsmall mt-5">Editor</p>
                        </div>
                        
                        <div className="remove-link">
                            <a href="#" className="fs-xsmall">Remove user</a>
                        </div>
                    </div>
                </div>
            </div>
       <Modal opened={opened} onClose={close} title="Invite Account" centered>
        <TextInput label="Email Address" placeholder="Tap to edit" className='mt-2' />

      <Radio.Group label="Permission" className='mt-4'>
         <div className='radio'>
               <div className='d-flex mt-3'>
              <div>
                    <Radio value="react" label="" size="xs" />
                </div>
                <div className='mx-3'>
                    <p className='m-0 radio-text'>Administrator</p>
                    <p className='radio-text2'>This user can add new user or remove existing once  </p>
                </div>
          </div>
         
          <div className='d-flex mt-3'>
            <div>
                  <Radio value="react" label="" size="xs" />
              </div>
              <div className='mx-3'>
                  <p className='m-0 radio-text'>Editor</p>
                  <p className='radio-text2'>This user can not add new user or remove existing once  </p>
              </div>
          </div>
         </div>
        </Radio.Group>

       <Btn type="submit" className="my-button-modal2 fs-small">Invite User </Btn>

      </Modal>
        </div>


    )
}

export default User