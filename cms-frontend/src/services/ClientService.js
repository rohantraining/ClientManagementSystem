//REST CLIENT CALLS USING AXIOS
import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/clients";
export const listClients = () => {
    return axios.get(REST_API_BASE_URL);
}
