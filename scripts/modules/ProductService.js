import axios from "axios";

async function getProductList(page, pageSize, keyword = "") {
    try {
        const res = await axios.get(`https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`);
        const data = res.data;

        return data;
    } catch(error) {
        return error;
    }
}
async function getProduct(id) {
    try {
        const res = await axios.get(`https://sprint-mission-api.vercel.app/products/${id}`);
        const data = res.data;

        return data;
    } catch (error) {
        return error;
    }
}
async function createProduct(createContainer) {
    try {
        // JSON.stringify 제거
        const res = await axios.post(`https://sprint-mission-api.vercel.app/products`, createContainer);
        const data = res.data;

        return data;
    } catch (error) {
        return error;
    }
}
async function patchProduct(id, patchContainer) {
    try {
        const res = await axios.patch(`https://sprint-mission-api.vercel.app/products/${id}`, patchContainer);
        const data = res.data;

        return data;
    } catch (error) {
        return error;
    }
}
async function deleteProduct(deleteProductID) {
    try {
        const res = await axios.delete(`https://sprint-mission-api.vercel.app/products/${deleteProductID}`);
        const data = res.data;

        return data;
    } catch (error) {
        return error;
    }

}
export default {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct,
}