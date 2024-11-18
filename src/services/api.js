import axios from 'axios';
import apiUrl from "../config/apiConfig";

export const fetchUsers = () => axios.get(`${apiUrl}`);