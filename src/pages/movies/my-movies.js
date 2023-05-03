import React, { useState } from "react";
import Navbar from '../../components/Navbar'
import { useDisclosure } from '@mantine/hooks';
import Button from '../../components/Button'
import { Form } from 'react-bootstrap'
import { Container, Row, Col } from "react-bootstrap";
import MoviesCard from './MoviesCard';
import UploadModal from "./uploadModal";

const myMovies = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  function handleButtonClick(event) {
    event.preventDefault();
    setShowComponent(true);
    console.log('kk')
  }



    const projects = [
        {
          title: "White wedding",
          description: "Design & Development",
          imgUrl: " ../images/mov1.png",
        },
        {
          title: "Brooklyn Simmons",
          description: "Design & Development",
          imgUrl: " ../images/mov2.png",
        },
        {
          title: "Cameron Williamson",
          description: "Design & Development",
          imgUrl: " ../images/mov3.png",
        },
        {
          title: "Annette Black",
          description: "Design & Development",
          imgUrl: " ../images/mov4.png",
        },
        {
          title: "Online portfolio",
          description: "Design & Development",
          imgUrl: " ../images/mov2.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov3.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov1.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov4.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov2.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov4.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov1.png",
        },
        {
          title: "Travel booking website",
          description: "Design & Development",
          imgUrl: " ../images/mov3.png",
        },
        
      ];
     



      return (
        <div className='my-movies'>
          <Navbar />
          <div className='container mt-4'>
            <Form className="d-flex pt-2 ">
              <input type='search' placeholder="Search for a show or movie" className='input' />
              <img src='../images/search.png' className='search-icon' />
              {showComponent && <UploadModal   opened={opened} onClose={close}  />}
<Button className='fs-small search-btn' onClick={open}>
  <img src='../images/upload-videp.png' className='upload-icon' alt='upload icon'/>
  Upload Video
</Button>
    
              <Button className='fs-small search-btn'>
                <img src='../images/upload-video.png' className='upload-icon' alt='upload icon' />
                Hero Video
              </Button>
            </Form>
          </div>
    
          <Container fluid className='movie-container'>
            <div className="mt-4">
              <Row>
                <Col size={12}>
                  <Row >
                    {projects.map((project, index) => (
                      <MoviesCard key={index} {...project} />
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
    
         
        </div>
      )
    
}

export default myMovies