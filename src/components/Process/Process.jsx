import React from 'react'
import './Process.css'
import process from '../Images/process.gif'

const Process = () => {
  return (
    <>
   <section className='our-process'>
    <div className='service-area'>
    <h2 style={{color:'#ff4500', fontFamily:"'Montserrat' serif", fontOpticalSizing:"auto",fontWeight:"bold" }} >OUR PROCESS</h2>
    <p style={{color:'rgb(244, 253, 211)', width:'50%', margin:'auto'}}>Unlock your true potential, leverage the best of technology, and create applications based on a modern algorithm with our experts.</p>
    </div>
    <div className='process-img'>
   <img src={process} alt='img' />
    </div>
   </section>
    </>
  )
}

export default Process;