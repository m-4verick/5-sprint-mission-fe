import apiClient from '../global.js'

/**
 * article 리스트를 요청하는 함수
 * @param {number} page 페이지 수
 * @param {number} pageSize 페이지당 게시글 수
 * @param {string} keyword 검색 키워드
 * @description 기본 값은 page 1, pageSize 3, keyword ''
 */
async function getArticleList( page = 1, pageSize = 3, keyword = '' ) {
    try {
        const res = await apiClient.get(`/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * 특정 ID의 article을 요청하는 함수
 * @param {number} id 조회할 특정 article의 ID
 */
async function getArticle( id ) {
    try {
        const res = await apiClient.get(`/articles/${id}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * article을 생성하는 함수
 * @param {string} title 제목
 * @param {string} content 내용
 * @param {string} image 이미지 링크
 * @description 객체를 사용합니다.
 */
async function createArticle({ title, content, image }) {
    try {
        const res = await apiClient.post(`/articles`, { title, content, image } );
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * @param {number} id 수정할 article의 ID
 * @param {object} obj 수정할 내용이 담긴 객체
 * @description 수정할 데이터를 객체로 전달합니다.
 */
async function patchArticle( id , obj ) {
    try {
        const res = await apiClient.patch(`/articles/${id}`, obj );
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

/**
 * article을 삭제하는 함수
 * @param id
 * @description 특정 ID의 article을 삭제합니다.
 */
async function deleteArticle( id ) {
    try {
        const res = await apiClient.delete(`/articles/${id}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export default {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle
}