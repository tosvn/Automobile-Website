const getElem = x => document.querySelector(x);
const getElems = x => document.querySelectorAll(x);

const allProducts = [
    {
        id: 1234,
        brand: "BMW",
        image: "bmw.jpg",
        name: "BMW X450 Latest",
        price: 2225500,
        oldPrice: 3283429,
        rating: 3.5
     },

     {
        id: 1235,
        brand: "Ford",
        image: "ford.jpg",
        name: "Ford 2018 Model",
        price: 363200,
        oldPrice: 3283429,
        rating: 3.1
     },

     {
        id: 1236,
        brand: "Audi",
        image: "audi.jpg",
        name: "Audi 1854 Model",
        price: 2225500,
        oldPrice: 1483429,
        rating: 3.6
     },

     {
        id: 1237,
        brand: "Bugatti",
        image: "bugatti.jpg",
        name: "Bugatti X94",
        price: 843200,
        oldPrice: 8483429,
        rating: 3.5
     },

     {
        id: 1238,
        brand: "Mercedes",
        image: "mercedes.jpg",
        name: "Mercedes",
        price: 9843200,
        oldPrice: 98483429,
        rating: 4.8
     },
];

const productWrap = getElem(".product-wrap");
allProducts.forEach((product,i)=>{
    const {id,brand,name,image,rating,price,oldPrice} = product; //object destructuring
    productWrap.innerHTML += `  <aside class="product-card">
    <figure class="product-image">
        <img src="./images/${image}" alt="" class="lazy-loading">
        <figcaption class="product-brand">${brand}</figcaption>
    </figure>
    <div class="product-info">
        <h3 class="product-name">${name}</h3>
        <div class="product-mid">
            <div class="product-rating">
                <i class="fa fa-star"></i><span class="product-score">${rating}</span>
            </div>
            <div class="product-pricing">
                <h4 class="product-price">&#8358;${price}</h4>
                <del class="product-oldprice">&#8358;${oldPrice}</del>
            </div>
        </div>
        <div class="product-base">
            <button class="product-cart" onclick="addToCart(${id})"><i class="fa fa-shopping-basket"></i> Add to Cart</button>
            <span class="product-icon"><i class="fa fa-heart"></i></span>
            <span class="product-icon"><i class="fa fa-share-alt"></i></span>
        </div>
    </div>
</aside>`
});

let cart = [], cartTotal = 0;

function addToCart(id){
    let selectedProduct = allProducts.filter(product => product.id === id)[0];
    let foundInCart = cart.filter(el => el.id === id);
    if(foundInCart.length > 0){
        cart = cart.map((product)=>{
            if(product.id === id){
                return {...product, qty: product.qty + 1}
            }
            else {
                return product;
            }
        })
    }
    else {
        cart = [{...selectedProduct, qty: 1}, ...cart, ]
    }
    cartTotal = cart.reduce((oldTotal,product) => oldTotal + (product.price * product.qty), 0);
    console.log({cartTotal})
}

