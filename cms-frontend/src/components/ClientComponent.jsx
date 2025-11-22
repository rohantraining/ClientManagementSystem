import React, { useEffect, useState } from 'react'
import { createClient, updateClient, getClient } from '../services/ClientService'
import { useNavigate, useParams } from 'react-router-dom'

const ClientComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();
    const {id} = useParams(); //to get id param from url

    useEffect(() => {
        if (id) { //if id present in url, then fetch client details and set to state variables
            //GET CLIENT BY ID
            getClient(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id])

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    //const handleFirstName = (e) => setFirstName(e.target.value);
    //const handleLastName = (e) =>  setLastName(e.target.value);
    //const handleEmailId = (e) =>  setEmail(e.target.value);


    function saveorupdateClient(e) {
        e.preventDefault(); //prevent default activities on form submit

        if (validateForm()) { //if any validation returns true , then proceed to add client
            const client = { firstName, lastName, email };
            console.log(client);

           if (id) {
                //UPDATE CLIENT
                updateClient(id, client).then(() => {
                    alert("Client updated successfully");
                    navigate('/clients');
                })
            } else {
                //CREATE CLIENT
                createClient(client).then(() => {
                    alert("Client added successfully");
                    navigate('/clients');
                })
        }
        }

    }


    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }; //spread operators- used to copy one obj into separate variable
        if (firstName.trim()) { //if firstname is not empty, no error, else error saying firstname is required.
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }

        if (firstName.trim()) { //if firstname is not empty, no error, else error saying lastname is required.
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }

        if (email.trim()) { //if email is not empty, no error, else error saying email is required.
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    //if clientid is present in url, then return page title as updateclient or else addclient
    function pageTitle() {
        if (id) { //if id arleady present, then update client, else add client
            return <h2 className="text-center">Update Client</h2>
        }
        else {
            return <h2 className="text-center">Add Client</h2>
        }
    }

    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                     <div className='form-group mb-2'>
                        <label className='form-label'>Client First Name:</label>
                        <input
                            type='text'
                            placeholder='Enter Client First Name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} //if error, invalid-feeback bootstrap class is used.
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                        </input>
                        {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Client Last Name:</label>
                        <input
                            type='text'
                            placeholder='Enter Client Last Name'
                            name='firstName'
                            value={lastName}
                             className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            onChange={(e) => setLastName(e.target.value)}
                        >
                        </input>
                        {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label'>Client Email Id:</label>
                        <input
                            type='text'
                            placeholder='Enter Client Email Id'
                            name='firstName'
                            value={email}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                    </div>

                    <div className="text-center mt-3 pb-3">
                        <button className='btn btn-success' onClick={saveorupdateClient}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClientComponent