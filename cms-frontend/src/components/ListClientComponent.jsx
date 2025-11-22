//rfce(react function component export)
//rafc(react arrow function component export)

import React from 'react'
import { useState, useEffect } from 'react'
import { deleteClient, listClients } from '../services/ClientService'
import { useNavigate } from 'react-router-dom'  //for navigation between components

const ListClientComponent = () => {
    const [clients, setClients] = useState([])  //syntax to use userState hook JS Function[setvariable, functiona that updates state variable]
    
    const navigate = useNavigate(); //for navigation between components


    function getAllClients(){
         listClients().then((response) => {
            setClients(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

        useEffect(() => {
        getAllClients();
    }, []) //useEffect Hook - callback arrow function and dependency list(empty array)
     
    //add new Client Button
    function addNewClient(){
        navigate('/add-client'); //navigating to add-client component
        console.log("add new client button clicked");
    }
    
    //update client button
    function updateClient(id){
        navigate(`/edit-client/${id}`); //navigating to edit-client component with id param
    }

    //update client button
    function removeClient(id){
        console.log(id); //navigating to delete-client component with id param
        deleteClient(id).then(() => {
            getAllClients(); //refresh client list after deletion
            alert("Client deleted successfully");       
    }).catch(error => {
        console.log(error);
    })
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
                    <th>Actions</th>
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
                            <td>
                                <button className='btn btn-info' onClick={() =>updateClient(client.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() =>removeClient(client.id)}>Delete</button>                      
                            </td>
                        </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListClientComponent