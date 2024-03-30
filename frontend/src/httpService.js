import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5050/'

export const generalRequest = axios.create({});
