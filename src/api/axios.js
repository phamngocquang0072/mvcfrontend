
import axios ,{ AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

export let endpoints = {
    'songlist': '/Song',
}

const axiosClient = axios.create({
    baseURL: 'https://eae0-2001-ee0-d708-1970-acb8-2ccf-bb6f-b1c4.ap.ngrok.io/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
})
export default axiosClient