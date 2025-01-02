import article from './modules/ArticleService.js';
import product from './modules/ProductService.js';
import global from './global.js'

let articleTestUnit, productTestUnit;

articleTestUnit = await article.getArticleList(1, 3)
console.log(articleTestUnit);

articleTestUnit =  await article.getArticle(151)
console.log(articleTestUnit);

const createArticleObject = {
    title: "create article test",
    content: "create article test",
    image: "createArticle.png"
}
articleTestUnit = await article.createArticle(createArticleObject)
console.log(articleTestUnit);

const patchArticleObject = {
    title: "patch article test",
    content: "patch article test"
}
articleTestUnit = await article.patchArticle(151, patchArticleObject)
console.log(articleTestUnit);

articleTestUnit = await article.deleteArticle(151)
console.log(articleTestUnit);


productTestUnit = await product.getProductList(1, 3)
console.log(productTestUnit);

productTestUnit = await product.getProduct(58)
console.log(productTestUnit);

const createProductObject = {
    name: "create product",
    description: "create product",
    price: 30000,
    tags: ["createProduct1", "createProduct2"],
    images: ["createProduct1.png", "createProduct2.png"]
}
productTestUnit = await product.createProduct(createProductObject)
console.log(productTestUnit);

const patchProductObject = {
    name: "patch product",
    description: "patch product",
    price: 20000
}
productTestUnit = await product.patchProduct(747, patchProductObject)
console.log(productTestUnit);

productTestUnit = await product.deleteProduct(747)
console.log(productTestUnit);