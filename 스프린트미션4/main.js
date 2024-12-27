import article from './modules/ArticleService.js';
import product from './modules/ProductService.js';

let articleValue, productValue;


productValue = await product.getProductList(1,2);
console.log(productValue);

productValue = await product.getProduct(42);
console.log(productValue);

const createProductContainer = {
    name: "이름",
    description: "설명",
    price: 10000,
    tags: ["tag1", "tag2"],
    images: ["images1", "images2"],
}
productValue = await product.createProduct(createProductContainer);
console.log(productValue);

const patchProductContainer = {
    name: "edit",
}
productValue = await product.patchProduct(688, patchProductContainer);
console.log(productValue);

productValue = await product.deleteProduct(688);
console.log(productValue);