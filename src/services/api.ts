import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://labeninjas.herokuapp.com',
    headers: {
        Authorization: '144134a4-8efa-4b2e-a4d4-0b0d41b25795'
    }
})