import React from 'react'
import homeimage from '../assets/images/bb.jpg'
import Form from '../Components/form/form.jsx'

const Dashboard = () => {
  return (
    <div>
    <section className="homeImage">
      <img src={homeimage}/> 
    </section>
    <Form/>
    </div>
  )
}

export default Dashboard

