import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateStudent() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

function handleSubmit(event) {

    event.preventDefault();  // to prevent page refresh
    axios.post('http://localhost:8081/create', {name, email})
    .then(res => {
        console.log("Created student", res);
        navigate('/');
    })

}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounder p-3'>
            <h1>Create student</h1>
            <form onSubmit={handleSubmit}>
                <h2>Add student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Your name' className='form-control' onChange = {e => setName(e.target.value)}/>
                    
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder='Your mail' className='form-control' onChange = {e => setEmail(e.target.value)} />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent
