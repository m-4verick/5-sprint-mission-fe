import axios from "axios";

async function getArticleList(page, pageSize, keyword="") {
    try {
        const url = `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`;
        const res = await axios.get(url)
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}
async function createArticle(title, content, image) {
    try {
        const url = `https://sprint-mission-api.vercel.app/articles`
        const res = await axios.post(url, {
            title,
            content,
            image,
        })
        const data = res.data;
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}
async function patchArticle(patchID, container) {
    try {
        const url = `https://sprint-mission-api.vercel.app/articles/${patchID}`;
        const res = await axios.patch(url, container)

        return res.data;
    } catch (error) {
        console.log(error);
    }
}
async function deleteArticle(deleteID) {
    try {
        const res = await axios.delete(`https://sprint-mission-api.vercel.app/articles/${deleteID}`);
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}
export default {
    getArticleList,
    createArticle,
    patchArticle,
    deleteArticle,
}