import apiClient from '../global.js'

/**
 * product 리스트를 요청하는 함수
 * @param {number} page 페이지 수
 * @param {number} pageSize 페이지당 상품 수
 * @param {string} keyword 검색 키워드
 * @description 기본 값은 page 1, pageSize 3, keyword ''
 */
async function getProductList( page = 1, pageSize = 3, keyword = '' ) {
    try {
        const res = await apiClient.get(`/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * 특정 ID의 product를 요청하는 함수
 * @param {number} id 조회할 특정 product의 ID
 */
async function getProduct( id ) {
    try {
        const res = await apiClient.get(`/products/${id}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * product 게시글을 생성하는 함수
 * @param {string} name 상품명
 * @param {string} description 설명
 * @param {number} price 가격
 * @param {array} tags 배열 형태의 값
 * @param {array} images 배열 형태의 값
 * @description tags와 images는 문자열 타입이 들어있는 배열
 */
async function createProduct({ name, description, price, manufacturers, tags, images }) {
    try {
        const res = await apiClient.post(`/products`, { name, description, price, manufacturers, tags, images } );
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * product 게시글을 수정하는 함수
 * @param {number} id 수정할 특정 게시글의 ID
 * @param {object} obj 수정할 데이터가 담긴 객체
 */
async function patchProduct( id , obj ) {
    try {
        const res = await apiClient.patch(`/products/${id}`, obj );
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * product 게시글을 삭제하는 함수
 * @param {number} id 삭제할 특정 게시글의 ID
 */
async function deleteProduct( id ) {
    try {
        const res = await apiClient.delete(`/products/${id}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export default {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct,
}