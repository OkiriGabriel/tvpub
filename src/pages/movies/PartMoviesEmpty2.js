import React from 'react'
import Navbar from '../../components/Navbar'
import { Button } from '@mantine/core';

const PartMoviesEmptyState = () => {
  return (
    <div className='seasonalmovies-empty text-center '>
      <Navbar />
      
      <div className='container mt-5 bg-white w-50 justify-content-center px-0 seasonal-card'>
        <div className='d-flex bg-black justify-content-between p-2'>
            <div className='d-flex'>
                <p className='fs-small m-2'>Part 1</p>
                <p className='fs-small2 text-color m-2'>Part 2</p>
            </div>
            <div>
                <p className='fs-small m-2'>Add New Season</p>
            </div>

      </div>
        <div className='d-flex pt-4 px-3'>
        <p className='fs-small text-black mt-2'>Part 1</p>
         <Button className='fs-small search-btn'>
             <img src='../images/upload-videp.png' className='upload-icon' alt='upload icon'/>
             Upload Video
       </Button>
      </div>
       <div className='m-5 p-3'>
             <img src='../images/Vector (5).png' className='w-25' />
        <p className='text-color2 fw-bold fs-small mt-2 mb-5'>When you add something your date <br /> would be displayed here</p>
       </div>
      </div>
      
    </div>
  )
}

export default PartMoviesEmptyState
