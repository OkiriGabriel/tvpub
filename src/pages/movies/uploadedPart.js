import Navbar from '../../components/Navbar'
import { Button } from '@mantine/core';
import { Container, Row, Col } from "react-bootstrap";
import UploadedPartCard from './UploadedPartCard';

const UploadedPart = () => {
    
    const projects = [
        {
          title: "1. the wedding plan",
          description: "Design & Development",
          imgUrl: " ../images/mov1.png",
        },
    
      ];
     



  return (
    <div className='seasonalmovies-empty text-center '>
      <Navbar />
      
      <div className='container mt-5 bg-white w-50 justify-content-center px-0 seasonal-card'>
        <div className='d-flex bg-black justify-content-between p-2'>
            <div className='d-flex'>
                <p className='fs-small m-2'>Part 1</p>
                <p className='fs-small2 text-color m-2'>Part 2</p>
            </div>
            <div className='d-flex plus align-center'>
                <img src='../images/plus-circle2.png' className='upload-icon' />
                <p className='fs-xsmall primary-color my-2'>Add New Part</p>
            </div>

      </div>
        <div className='d-flex pt-4 px-3'>
        <p className='fs-small text-black mt-2'>Part 1</p>
         <Button className='fs-small search-btn'>
             <img src='../images/upload-videp.png' className='upload-icon' alt='upload icon'/>
             Upload Video
       </Button>
      </div>

       <Container fluid className='-containermovie'>
            <div className="mt-4">
              <Row >
                <Col size={12}>
                  <Row className='m-0 p-0'>
                    {projects.map((project, index) => (
                      <UploadedPartCard key={index} {...project} />
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>

     </div>
      
    </div>
  )
}

export default UploadedPart
