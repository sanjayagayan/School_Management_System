import React from 'react'
import Button from '@mui/material/Button';
import Liste from '../Components/Listed/list.jsx'


const Schools = () => {
  return (
    <div>
      <div className='btn'>
       <Button variant="contained" color="primary">Add School</Button> 
      </div>
      <Liste/>
    </div>
  )
}

export default Schools