import React from 'react'
import Navbar from '../../components/Navbar'


const BlacklistEmpty = () => {
    return(
        <div className='movies-empty text-center'>
           
            <Navbar />
            <div className='container p-5 mt-5'>
                <img src='../images/search-movies.png' className='w-25'/>
                <p className='text-grey'>When you add something your date <br /> would be displayed here</p>
             </div>
        </div>
    )
}

export default BlacklistEmpty