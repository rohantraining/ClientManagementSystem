import React, { useState } from 'react'

const ClientComponent = () => {
    const [firstName, setFirstName] =  useState('')
    const [lastName, setLastName] =  useState('')
    const [email, setEmail] =  useState('')
    
    //const handleFirstName = (e) => setFirstName(e.target.value);
    //const handleLastName = (e) =>  setLastName(e.target.value);
    //const handleEmailId = (e) =>  setEmail(e.target.value);
    

     function saveClient(e){
        e.preventDefault(); //prevent default activities on form submit

        const client = {firstName, lastName, email};
        console.log(client);
    }

  return (
    <div className='container'>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className="text-center fw-bold mb-4">Add Client</h3>

                <div className='form-group mb-2'>
                    <label className='form-label'>Client First Name:</label>
                    <input 
                    type='text'
                    placeholder='Enter Client First Name'
                    name='firstName'
                    value={firstName}
                    className='form-control'
                    onChange={(e) => setFirstName(e.target.value)}
                    >
                    </input>
                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Client Last Name:</label>
                    <input 
                    type='text'
                    placeholder='Enter Client Last Name'
                    name='firstName'
                    value={lastName}
                    className='form-control'
                    onChange={(e) =>  setLastName(e.target.value)}
                    >
                    </input>
                </div>
                
                <div className='form-group mb-2'>
                    <label className='form-label'>Client Email Id:</label>
                    <input 
                    type='text'
                    placeholder='Enter Client Email Id'
                    name='firstName'
                    value={email}
                    className='form-control'
                    onChange={(e) =>  setEmail(e.target.value)}
                    >
                    </input>
                </div>

                  <div className="text-center mt-3 pb-3">
                      <button className='btn btn-success' onClick={saveClient}>Submit</button>
                  </div>
            </div>
        </div>

    </div>
  )
}

export default ClientComponent