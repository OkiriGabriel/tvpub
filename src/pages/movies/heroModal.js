import { Select } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

 const Demo = () => {
  const [opened, { open, close }] = useDisclosure(false);
 const isMobile = useMediaQuery("(max-width: 50em)");
  return (
    <>

      <Modal
            opened={opened}
            onClose={close}
            fullScreen={isMobile}
            centered
            transitionProps={{ transition: 'fade', duration: 200 }}
          >
            <h4 className='hero-modal-text'>Hero Modal</h4>
          <Select
                label="Hero Movie"
                placeholder="Search or select from dropdown"
                searchable
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}/>

          <Button type="submit" className="my-button-modal2 fs-small"> Send Step </Button>
      </Modal>
    
          <Group position="center">
            <Button onClick={open}>Open Modal</Button>
          </Group>

        
    </>
  

  
  );
}

export default Demo;