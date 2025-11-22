//REST CLIENT CALLS USING AXIOS
import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/clients";
export const listClients = () => {
    return axios.get(REST_API_BASE_URL); //listClients API
}

export const createClient = (client) => axios.post(REST_API_BASE_URL, client);  //add createClient API

export const updateClient = (id, client) => axios.put(REST_API_BASE_URL + '/' + id, client); //updateclient by Id API

export const getClient = (clientId) => axios.get(REST_API_BASE_URL + '/' + clientId); //getclient  by id API

export const deleteClient = (clientId) => axios.delete(REST_API_BASE_URL + '/' + clientId); //deleteclient by id API