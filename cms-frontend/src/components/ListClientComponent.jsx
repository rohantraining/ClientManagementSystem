//rfce(react function component export)
//rafc(react arrow function component export)

import React from 'react'
import { useState, useEffect } from 'react'
import { listClients } from '../services/ClientService'
import { useNavigate } from 'react-router-dom'  //for navigation between components

const ListClientComponent = () => {
    const [clients, setClients] = useState([])  //syntax to use userState hook JS Function[setvariable, functiona that updates state variable]
    
    const navigate = useNavigate(); //for navigation between components

    useEffect(() => {
        listClients().then((response) => {
            setClients(response.data);
        }).catch(error => {
            console.log(error);
        })

    }, []) //useEffect Hook - callback arrow function and dependency list(empty array)


    //add new Client Button
    function addNewClient(){
        navigate('/add-client'); //navigating to add-client component
        console.log("add new client button clicked");
    }
    

  return (
    <div className='container'>
        <h2 className="text-center">Clients List</h2>
        <button className='btn btn-primary mb-2 ' onClick={addNewClient}>Add Client</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Client Id</th>
                    <th>Client First Name</th>
                    <th>Client Last Name</th>
                    <th>Client Email Id</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(client =>  //clients hold response of REST API call
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                            <td>{client.email}</td> 
                        </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListClientComponent