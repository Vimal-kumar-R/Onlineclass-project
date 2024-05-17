import React, { useState } from 'react'
import axios from 'axios'

export default function Registration() {
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const [phonenumber,setPhoneumber]=useState('')
    const [qualification,setQualification]=useState('')
    const [city,setCity]=useState('')
    const[state,setState]=useState('')
    const[graduationYear,setGraduationYear]=useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:name,
            email:email,
            phonenumber:phonenumber,
            qualification:qualification,
            graduationYear:graduationYear,
            city:city,
            State:state
         
        }
        //npm i axios
        axios.post('http://localhost:3001/reg/post',formData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='home'>Registration
        
{/*       
      <form onSubmit={handleSubmit}>
        <label>First name</label><br></br>
        <input type='text' value={name} placeholder='E.g Vimal' onChange={(e)=>setName(e.target.value)}/><br></br>
        <label>Phone Number</label><br></br>
        <input type='number' value={phonenumber} placeholder='E.g +9199999999' onChange={(e)=>setPhoneumber(e.target.value)}/><br></br>
        <label>Email</label><br></br>
        <input type='email' value={email} placeholder='E.g rlrv@gmail.com' onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <label>Qulalification</label><br></br>
        <input type='text' value={qualification} placeholder='E.g Bsc' onChange={(e)=>setQualification(e.target.value)}/><br></br>
        <label>Graduation year</label><br></br>
        <input type='number' value={graduationYear} placeholder='E.g 2024' onChange={(e)=>setGraduationYear(e.target.value)}/><br></br>
        <label>city</label><br></br>
        <input type='text' value={city} placeholder='E.g Coimbatore' onChange={(e)=>setCity(e.target.value)}/><br></br>
        <label>State</label><br></br>
        <input type='text' value={state} placeholder='E.g Tamil Nadu' onChange={(e)=>setState(e.target.value)}/><br></br>
        <button type='submit' className='sparkle-button'>Submit</button>
      </form>
    </div> */}
      
      <div className='first-box'>
        <h1 className='home-heading'>Unlock your dream job, no matter your background!</h1><br></br>
        <h4>Our learners come from all walks of life.</h4><br></br>
        <p className='home-para'>We’ve seen an Actuarial Mathematics student become a Systems Administrator, a civil engineering graduate turn into a Service Engineer, and a non-coder become a Full Stack Developer.</p><br></br>
        <p className='home-para'>Every student’s story is unique; let KGiSL Microcollege be the start of your next chapter.</p>
      </div>
      <div className='second-box'>
      <form onSubmit={handleSubmit} className='home-form'>
        <label>First name</label><br></br>
        <input type='text' value={name} placeholder='E.g Vimal' onChange={(e)=>setName(e.target.value)}/><br></br>
        <label>Phone Number</label><br></br>
        <input type='number' value={phonenumber} placeholder='E.g +9199999999' onChange={(e)=>setPhoneumber(e.target.value)}/><br></br>
        <label>Email</label><br></br>
        <input type='email' value={email} placeholder='E.g rlrv@gmail.com' onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <label>Qulalification</label><br></br>
        <input type='text' value={qualification} placeholder='E.g Bsc' onChange={(e)=>setQualification(e.target.value)}/><br></br>
        <label>Graduation year</label><br></br>
        <input type='number' value={graduationYear} placeholder='E.g 2024' onChange={(e)=>setGraduationYear(e.target.value)}/><br></br>
        <label>city</label><br></br>
        <input type='text' value={city} placeholder='E.g Coimbatore' onChange={(e)=>setCity(e.target.value)}/><br></br>
        <label>State</label><br></br>
        <input type='text' value={state} placeholder='E.g Tamil Nadu' onChange={(e)=>setState(e.target.value)}/><br></br>
        <button type='submit' className='sparkle-button'>Submit</button>
      </form>
      </div>
      <div className='third-box'>

      </div>
    </div>
    
  )
}

