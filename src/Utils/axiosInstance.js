import axios from 'axios';

const instance = axios.create({
    baseURL: "https://accounts.parabolics.io",
});


export default instance;