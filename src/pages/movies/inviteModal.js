import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import { Modal, Group, TextInput } from '@mantine/core';
import { Button } from 'react-bootstrap';
import { Radio } from '@mantine/core';
import Btn from '../../components/Button'
// import Btn from '../../components/Button'

function InviteModal() {
  const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState('react');


  return (
    <>
      <Modal opened={opened} onClose={close} title="Invite Account" centered>
        <TextInput label="Email Address" placeholder="Tap to edit" className='mt-2' />

      <Radio.Group label="Permission" className='mt-4'>
         <div className='radio'>
               <div className='d-flex mt-3 '>
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

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>

    </>
  );
}

export default InviteModal;