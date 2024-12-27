import axios from "axios";
import articleService from './modules/ArticleService.js'
import productService from './modules/ProductService.js'

///////////////////////////////////////////////////////////////////////
/* articleService */
///////////////////////////////////////////////////////////////////////
articleService.getArticleList(1, 5, "테스트")
    .then((res) => { console.log(res);});

articleService.createArticle("테스트용 제목", "테스트용 내용", "testimg.png")
    .then((res) => { console.log(res);});

const patchArticleContainer = {
    title: "수정된 제목",
    content: "수정된 내용",
}
articleService.patchArticle(1289, patchArticleContainer)
    .then((res) => { console.log(res);});

articleService.deleteArticle(202)
    .then((res) => { console.log(res);});


///////////////////////////////////////////////////////////////////////
/* productService */
///////////////////////////////////////////////////////////////////////
productService.getProductList(1, 5)
    .then((res) => { console.log(res);});

const createProductContainer = {
    name: "프로덕트 생성 테스트",
    description: "프로덕트 테스트 내용",
    price: 20000,
    tags: ["tag1", "tag2"],
    images: ["image1.png", "image2.png"],
}
productService.createProduct(createProductContainer)
    .then((res) => { console.log(res);});

productService.getProduct(58)
    .then((res) => { console.log(res);});

const patchProductContainer = {
    name: "수정된 프로덕트 이름",
    price: 15000 //수정된 가격
}
productService.patchProduct(58, patchProductContainer)
    .then((res) => { console.log(res);});

productService.deleteProduct(58)
    .then((res) => { console.log(res);});