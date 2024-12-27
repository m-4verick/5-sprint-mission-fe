import global from '../global.js';

/**
 * article 리스트를 받아오는 함수
 * @param { number } page 페이지 수
 * @param { number } pageSize 페이지당 article 수
 * @param { string } keyword 검색 키워드
 *
 */
async function getArticleList(page, pageSize, keyword = "") {
    return fetch(global.articleURL + `?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then(res => {
        if (!res.ok) throw new Error;
        return res.json();
    })
}

/**
 * 특정 id의 article 받아오는 함수
 * @param { number } id 조회할 id값
 *
 */
async function getArticle(id) {
    return fetch(global.articleURL + `/${id}`)
        .then(res => {
            if (!res.ok) throw new Error;
            return res.json();
        })
}

/**
 * article을 생성하는 함수
 *
 * @param { object } obj 생성 정보를 객체로 전달
 *
 */
async function createArticle(obj) {
    return fetch(global.articleURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res => {
        if (!res.ok) throw new Error;
        return res.json();
    })
}

/**
 * 특정 id의 article 수정하는 함수
 * @param { number } id 수정할 article의 id값
 * @param { object } obj 수정할 내용이 담긴 객체
 *
 */
async function patchArticle(id, obj) {
    return fetch(global.articleURL + `/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res => {
        if (!res.ok) throw new Error;
        return res.json();
    })
}

/**
 * 특정 id의 article 삭제하는 함수
 * @param { number } id 삭제할 article의 id값
 *
 */
async function deleteArticle(id) {
    return fetch(global.articleURL + `/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        if (!res.ok) throw new Error;
        return res.json();
    })
}

export default {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle,
}