import axios from 'axios';
import global from '../global.js';

/**
 * article 리스트를 받아오는 함수
 * @param { number } page 페이지 수
 * @param { number } pageSize 페이지당 article 수
 * @param { string } keyword 검색 키워드
 *
 */
function getArticleList(page, pageSize, keyword = "") {

}

/**
 * 특정 id의 article을 받아오는 함수
 * @param { number } id 조회할 id값
 *
 */
function getArticle(id) {

}

/**
 * article을 생성하는 함수
 * @param { object } container name, content, image를 포함하는 객체
 *
 */
function createArticle(container) {

}

/**
 * 특정 id의 article을 수정하는 함수
 * @param { number } id 수정할 article의 id값
 * @param { object } obj 수정할 내용이 담긴 객체
 *
 */
function patchArticle(id, obj) {

}

/**
 * 특정 id의 article을 삭제하는 함수
 * @param { number } id 삭제할 article의 id값
 *
 */
function deleteArticle(id) {

}

export default {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle,
}