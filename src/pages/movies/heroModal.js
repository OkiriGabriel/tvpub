import { Select } from '@mantine/core';
import Btn from '../../components/Button'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 const Demo = (props) => {

  return (
    <>

     

         <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
      <Modal.Body>
        <Modal.Header closeButton>
          <Modal.Title>
            Hero Modal
          </Modal.Title>
      </Modal.Header>
      
       <Select
                label="Hero Movie"
                placeholder="Search or select from dropdown"
                searchable
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}/>

          <Btn type="submit" className="my-button-modal2 fs-small"> Send Step </Btn>
      </Modal.Body>
    

            
         
      </Modal>

        
    </>
  

  
  );
}

export default Demo;