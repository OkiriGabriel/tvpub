import React from 'react'
import Navbar from '../../components/Navbar'
import  Button  from '../../components/Button'

const PartMoviesEmpty = () => {
  return (
    <div className='movies-empty text-center'>
      <Navbar />
      <div className='container p-5 mt-5'>
        <img src='../images/search-movies.png' className='w-25' />
        <p className='text-grey'>When you add something your date <br /> would be displayed here</p>

        <Button type="submit" className="btnn">
          <img src="../images/Vector (3).png" alt='upload image icon' className='text-light mx-3' />
          Add new season
        </Button>
      
      </div>
      
    </div>
  )
}

export default PartMoviesEmpty
