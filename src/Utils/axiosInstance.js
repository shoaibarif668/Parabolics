import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://apo5gzt4s0.execute-api.us-east-2.amazonaws.com/dev/',
});


export default instance;