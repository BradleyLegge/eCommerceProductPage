const mainShoeImage = document.querySelector('#main-shoe-image');

const imageProduct1 = document.querySelector('#image-product-1');
const imageProduct2 = document.querySelector('#image-product-2');
const imageProduct3 = document.querySelector('#image-product-3');
const imageProduct4 = document.querySelector('#image-product-4');

const cart = document.querySelector("#cart")
const shoppingCartImage = document.querySelector(".shopping-cart-image")

const minusBtn = document.querySelector('#minus-btn')
const plusBtn = document.querySelector('#plus-btn')
const quantity = document.querySelector('#qty')
let count = 0
quantity.innerHTML = count

plusBtn.addEventListener('click', addQty)
minusBtn.addEventListener('click', deleteQty)

imageProduct1.addEventListener('click', getProduct1)
imageProduct2.addEventListener('click', getProduct2)
imageProduct3.addEventListener('click', getProduct3)
imageProduct4.addEventListener('click', getProduct4)

shoppingCartImage.addEventListener('click', showCart)

function getProduct1(){
    mainShoeImage.src = 'images/image-product-1.jpg'
    imageProduct1.classList.add('shoe-image-click')
    imageProduct2.classList.remove('shoe-image-click')
    imageProduct3.classList.remove('shoe-image-click')
    imageProduct4.classList.remove('shoe-image-click')
}

function getProduct2(){
    mainShoeImage.src = 'images/image-product-2.jpg'
    imageProduct2.classList.add('shoe-image-click')
    imageProduct1.classList.remove('shoe-image-click')
    imageProduct3.classList.remove('shoe-image-click')
    imageProduct4.classList.remove('shoe-image-click')
}

function getProduct3(){
    mainShoeImage.src = 'images/image-product-3.jpg'
    imageProduct3.classList.add('shoe-image-click')
    imageProduct2.classList.remove('shoe-image-click')
    imageProduct1.classList.remove('shoe-image-click')
    imageProduct4.classList.remove('shoe-image-click')
}

function getProduct4(){
    mainShoeImage.src = 'images/image-product-4.jpg'
    imageProduct4.classList.add('shoe-image-click')
    imageProduct2.classList.remove('shoe-image-click')
    imageProduct3.classList.remove('shoe-image-click')
    imageProduct1.classList.remove('shoe-image-click')
}

function showCart(){
    if(cart.classList.contains('cart')){
        cart.classList.remove('cart')
        cart.classList.add('cart-hidden')
    }
    else if(cart.classList.contains('cart-hidden')){
        cart.classList.remove('cart-hidden')
        cart.classList.add('cart')
    } 
}

function addQty(){
    count++;
    quantity.innerHTML = count
}

function deleteQty(){
    if(count <= 0){
        return
    }else{
        count--
        quantity.innerHTML = count
    }
}