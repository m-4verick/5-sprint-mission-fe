import axios from 'axios';

const requestInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            console.log("Request sent");
            return config;
        },
        (error) => {
            console.error("Request error:", error);
            return Promise.reject(error);
        }
    );
};
const responseInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use(
        (response) => {
            console.log("Response received");
            return response;
        },
        (error) => {
            console.error("Response error:", error);
            return Promise.reject(error);
        }
    );
};

const apiClient = axios.create({
    baseURL: 'https://sprint-mission-api.vercel.app',
    headers: {
        Accept: 'application/json',
    },
});

requestInterceptor(apiClient);
responseInterceptor(apiClient);

export default apiClient;