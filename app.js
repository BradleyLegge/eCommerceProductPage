let mainShoeImage = document.querySelector('#main-shoe-image');

const imageProduct1 = document.querySelector('#image-product-1');
const imageProduct2 = document.querySelector('#image-product-2');
const imageProduct3 = document.querySelector('#image-product-3');
const imageProduct4 = document.querySelector('#image-product-4');


imageProduct1.addEventListener('click', getProduct1)
imageProduct2.addEventListener('click', getProduct2)
imageProduct3.addEventListener('click', getProduct3)
imageProduct4.addEventListener('click', getProduct4)

function getProduct1(){
    mainShoeImage.src = 'images/image-product-1.jpg'
}

function getProduct2(){
    mainShoeImage.src = 'images/image-product-2.jpg'
}

function getProduct3(){
    mainShoeImage.src = 'images/image-product-3.jpg'
}

function getProduct4(){
    mainShoeImage.src = 'images/image-product-4.jpg'
}