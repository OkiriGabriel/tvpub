import { useState, useEffect } from "react";
// import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, TextInput, Textarea } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Btn from '../../components/Button'
import { Form } from 'react-bootstrap'
import { Container, Row, Col } from "react-bootstrap";
import MoviesCard from './MoviesCard';
import UploadModal from "./uploadModal";


const myMovies = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

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
      
                <Button className='fs-small search-btn' onClick={open}>
                  <img src='../images/upload-videp.png' className='upload-icon' alt='upload icon'/>
                  Upload Video
                </Button>
    
              <Btn className='fs-small search-btn'>
                <img src='../images/upload-videp.png' className='upload-icon' alt='upload icon' />
                Hero Video
              </Btn>
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
          <Drawer position='right' opened={opened} onClose={close} className="side-modal">
        {/* Drawer content */} 
            <div className='text-center'>
                <h6 className='text-center mb-3'>Upload Videos</h6>

                {imageUrl && selectedImage ? (
              <Box mt={2} textAlign="center">
                {/* <div>Image Preview:</div> */}
                <img src={imageUrl}  alt={selectedImage.name} height="100px" className='w-25 mb-1'/>
                </Box>
            ) :  <Box mt={2} textAlign="center"><img src='/images/video-uplooad.png'  alt='upload-video img' className='w-25 mb-1' /> </Box> 
            }
          
                {/* <img src='' alt='upload-video img' className='w-25 mb-1' /> */}
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="primary" component="span" className="primary-color fs-small fw-light">
                  <p>Add cover image</p>
                  </Button>
                </label>
     
                {/* <form onSubmit={handleSubmit}>
               
                  <input type="file" id="file-upload" name="file" onChange={handleFileInputChange} />
                </form> */}
                {/* <a href="#" className='primary-color fs-small fw-light'>
                
                </a> */}
            </div>

        <div className=''>
        <TextInput label="Movie Title" placeholder="Tap to edit"   {...form.getInputProps('email')} />
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
        
        
        <Btn type="submit" className="my-button-modal fs-small">
            <img src='../images/upload-videp.png' className='upload-icon'/> Send Step </Btn>
        <Btn type="submit" className="my-button-modal2 fs-small"> Send Step </Btn>
        </div>
          </Drawer>

 
        </div>
      )
    
}

export default myMovies