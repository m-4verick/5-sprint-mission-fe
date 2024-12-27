const articleURL = `https://sprint-mission-api.vercel.app/articles`;
const productURL = `https://sprint-mission-api.vercel.app/products`;

/**
 * status가 200대가 맞는지 검증하는 함수
 * @param obj 검증할 RESPONSE
 * @returns {boolean} status value가 200대가 맞는지 검증하여 true / false return
 */
function checkOk(obj) {
    const data = obj.status.toString()[0];

    return (data == 2);
}

export default {
    articleURL,
    productURL,
    checkOk,
}