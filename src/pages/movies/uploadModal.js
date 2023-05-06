import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, TextInput, Textarea } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';


function UploadModal() {
  const [opened, { open, close  }] = useDisclosure(false);

  return (
    <>
      <Drawer position='right' opened={opened} onClose={close} className="side-modal">
        {/* Drawer content */} 
            <div className='text-center'>
                <h6 className='text-center mb-3'>Upload Videos</h6>
                <img src='../images/video-uplooad.png' alt='upload-video img' className='w-25 mb-1' />
                <a href="#" className='primary-color fs-small fw-light'>
                    <p>Add cover image</p>
                </a>
            </div>

        <div className=''>
        <TextInput label="Movie Title" placeholder="Tap to edit" />
        <TextInput label="Movie Creator" placeholder="Tap to edit" />
        <TextInput label="Staring" placeholder="Tap to edit" />
        <Textarea label="Movie Description" placeholder="Tap to edit" />

        <TextInput component="select" label="Movie Genre" placeholder='Select from dropdown' rightSection={<IconChevronDown size={14} stroke={1.5} />}>
            <option value="Select from dropdown">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </TextInput>

        <TextInput component="select" label="Age restriction " placeholder='Select from dropdown' rightSection={<IconChevronDown size={14} stroke={1.5} />}>
            <option value="Select from dropdown">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </TextInput>
        
        
        <Button type="submit" className="my-button-modal fs-small">
            <img src='../images/upload-videp.png' className='upload-icon'/> Send Step </Button>
        <Button type="submit" className="my-button-modal2 fs-small"> Send Step </Button>
        </div>

      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}

export default UploadModal