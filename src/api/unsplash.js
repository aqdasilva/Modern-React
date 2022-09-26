import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2Ygwtrbjfd9kSnrrwsLPZykFGV4H9cJO2slPkktvhPY'
    }
});