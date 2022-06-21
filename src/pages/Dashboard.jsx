import React from 'react'
import homeimage from '../assets/images/bb.jpg'
import Form from '../Components/form/form2.jsx'
import Button from '@mui/material/Button';

const Dashboard = () => {
  return (
    <div>
    <section className="homeImage">
      <img src={homeimage}/> 
    </section>
    <div className='spacer'></div>
    <Form/>
    <div className='btn'>
       <Button variant="contained" color="primary">Course View</Button> 
    </div>
    </div>
  )
}

export default Dashboard

