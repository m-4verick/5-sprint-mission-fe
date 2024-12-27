import axios from 'axios';
import global from '../global.js';

////////////////// 싱글톤 패턴 분석하기 //////////////////////
// axios.defaults.baseURL = global.productURL;
// const requestInterceptor = (axiosInstance) => {
//     axiosInstance.interceptors.request.use(() => {
//         console.log("909");
//     }, (err) => {
//         console.log(err);
//     });
// }
// const instance = {}
// const AxiosDefault = (baseURL) => {
//     if (!instance[baseURL]) {
//         const axiosInstance = createAxiosInstance(baseURL);
//         requestInterceptor(axiosInstance)
//         instance[baseURL] = axiosInstance;
//     }
//     return instance[baseURL];
// }
// const createAxiosInstance = (baseURL) => {
//     return axios.create({
//         baseURL,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }
// const axiosClient = AxiosDefault(global.productURL);
////////////////////////////////////////////////////////

/**
 * product 리스트를 받아오는 함수
 * @param { number } page 페이지 수
 * @param { number } pageSize 페이지당 product 수
 * @param { string } keyword 검색 키워드
 *
 */
async function getProductList(page, pageSize, keyword = "") {
    try {
        const res = await axios.get(`${global.productURL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
        const data = res.data;

        if (global.checkOk(res)) return data;
        else throw new Error;
    } catch (error) {
        console.log(error);
    }
}

/**
 * 특정 id의 product 받아오는 함수
 * @param { number } id 조회할 id값
 *
 */
async function getProduct(id) {
    try {
        const res = await axios.get(`${global.productURL}/${id}`);
        const data = res.data;

        if (global.checkOk(res)) return data;
        else throw new Error;
    } catch (error) {
        console.log(error);
    }
}

/**
 * product를 생성하는 함수
 *
 * @param { object } obj 생성 정보를 객체로 전달
 *
 */
async function createProduct(obj) {
    try {
        const res = await axios.post(global.productURL, obj);
        const data = res.data;

        if (global.checkOk(res)) return data;
        else throw new Error;
    } catch (error) {
        console.log(error);
    }
}

/**
 * 특정 id의 product 수정하는 함수
 * @param { number } id 수정할 product의 id값
 * @param { object } obj 수정할 내용이 담긴 객체
 *
 */
async function patchProduct(id, obj) {
    try {
        const res = await axios.patch(global.productURL + `/${id}`, obj);
        const data = res.data;

        if (global.checkOk(res)) return data;
        else throw new Error;
    } catch (error) {
        console.log(error);
    }
}

/**
 * 특정 id의 product를 삭제하는 함수
 * @param { number } id 삭제할 product의 id값
 *
 */
async function deleteProduct(id) {
    try {
        const res = await axios.delete(`${global.productURL}/${id}`);
        const data = res.data;

        if (global.checkOk(res)) return data;
        else throw new Error;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct,
}