import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://hotel-reservation-api-0jt2.onrender.com/api"
});