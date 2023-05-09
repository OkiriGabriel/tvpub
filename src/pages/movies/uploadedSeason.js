import Navbar from '../../components/Navbar'
import { Button } from '@mantine/core';
import { Container, Row, Col } from "react-bootstrap";
import UploadedSeasonCard from './UploadedSeasonCard';

const UploadedSeason = () => {
    
    const projects = [
        {
          title: "1. the wedding plan",
          description: "Design & Development",
          imgUrl: " ../images/mov1.png",
        },
        {
          title: "2. the wedding",
          description: "Design & Development",
          imgUrl: " ../images/mov2.png",
        },
        {
          title: "3. the wedding",
          description: "Design & Development",
          imgUrl: " ../images/mov3.png",
        },
        {
          title: "4. the wedding",
          description: "Design & Development",
          imgUrl: " ../images/mov4.png",
        },
        {
          title: "5. the wedding",
          description: "Design & Development",
          imgUrl: " ../images/mov2.png",
        },
        {
          title: "6. the wedding" ,
          description: "Design & Development",
          imgUrl: " ../images/mov3.png",
        },
        
      ];
     



  return (
    <div className='seasonalmovies-empty text-center '>
      <Navbar />
      
      <div className='container mt-5 bg-white w-50 justify-content-center px-0 seasonal-card'>
        <div className='d-flex bg-black justify-content-between p-2'>
            <div className='d-flex'>
                <p className='fs-small m-2'>Season 1</p>
                <p className='fs-small2 text-color m-2'>Season 2</p>
            </div>
            <div className='d-flex plus align-center'>
                <img src='../images/plus-circle2.png' className='upload-icon' />
                <p className='fs-xsmall primary-color my-2'>Add New Season</p>
            </div>

      </div>
        <div className='d-flex pt-4 px-3'>
        <p className='fs-small text-black mt-2'>Season 1</p>
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
                      <UploadedSeasonCard key={index} {...project} />
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

export default UploadedSeason
