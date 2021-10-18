import axios from 'axios'

const base = axios.create({
  baseURL: process.env.BASE_URL
});

export default base
