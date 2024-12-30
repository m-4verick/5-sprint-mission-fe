import axios from "axios";

axios.defaults.baseURL = global.productURL;
const requestInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use(() => {
        console.log("909");
    }, (err) => {
        console.log(err);
    });
}

const responseInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use((res) => {
        console.log("909A");
        return res;
    }, (err) => {
        console.log(err);
    });
}
// 싱글톤 패턴
const instance = {}
const AxiosDefault = (baseURL) => {
    if (!instance[baseURL]) {
        const axiosInstance = createAxiosInstance(baseURL);
        requestInterceptor(axiosInstance)
        instance[baseURL] = axiosInstance;
    }
    return instance[baseURL];
}
const createAxiosInstance = (baseURL) => {
    return axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
const axiosClient = AxiosDefault(global.productURL);