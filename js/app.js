const size = document.getElementById('size')
let currentSize = 0
const minusBtn = document.getElementById('minusBtn')
const plusBtn = document.getElementById('plusBtn')
plusBtn.addEventListener('click', ()=>{
   currentSize++
   size.textContent = currentSize
})
minusBtn.addEventListener('click', ()=>{
   if(currentSize !== 0){
    currentSize--
    size.textContent = currentSize
   }
})


//Function to change image
const images = document.querySelectorAll('.image')
function changeImage(num){
   const imagePath = `/images/image-product-${num}-thumbnail.jpg`
   document.getElementById('productImage').setAttribute('src', imagePath)
}
images.forEach((image, index) =>{
   if(index === 0){
      image.addEventListener('click', ()=>{
         changeImage(1)
         image.classList.add('imageActive')
         images[1].classList.remove('imageActive')
         images[2].classList.remove('imageActive')
         images[3].classList.remove('imageActive')
      })
   }else if(index === 1){
      image.addEventListener('click', ()=>{
         changeImage(2)
         image.classList.add('imageActive')
         images[0].classList.remove('imageActive')
         images[2].classList.remove('imageActive')
         images[3].classList.remove('imageActive')
      })
   }
   else if(index === 2){
      image.addEventListener('click', ()=>{
         changeImage(3)
         image.classList.add('imageActive')
         images[0].classList.remove('imageActive')
         images[1].classList.remove('imageActive')
         images[3].classList.remove('imageActive')
      })
   }
   else if(index === 3){
      image.addEventListener('click', ()=>{
         changeImage(4)
         image.classList.add('imageActive')
         images[0].classList.remove('imageActive')
         images[1].classList.remove('imageActive')
         images[2].classList.remove('imageActive')
      })
   }
})



// To display cart items
const cartIcon = document.querySelector('.cartIcon')
const cartContainer = document.querySelector('.carted-container')

cartIcon.addEventListener('click', ()=>{
   cartContainer.classList.toggle('show-carted-container')
})

// Add product to cart
const addToCartBtn = document.getElementById('add-to-cart')
const cartProductContainer = document.querySelector('.cart-product')

addToCartBtn.addEventListener('click', ()=>{
  let amount = 125
  price = currentSize * amount
  cartProductContainer.innerHTML = `
  <div class="pro">
  <img src="/images/image-product-1-thumbnail.jpg" id="proImage">
  <div class="product-det">
    <p>Fall Limited Edition Sneakers</p>
    <p id="priceSize"> $${amount} * ${currentSize} <span id="overallPrice">$${price}</span> </p>
  </div>
  <img src="/images/icon-delete.svg" id="deleteIcon">
   </div>
   <button id="checkout">Checkout</button>
  `
  document.getElementById('NumCart').textContent = currentSize
  document.getElementById('NumCart').style.display = 'block'
})



const prevBtn = document.getElementById('IconPrev')
const nextBtn = document.getElementById('NextBtn')
let index = 1

nextBtn.addEventListener('click', ()=>{
   index++
   if(index < 5){
      let imagePath = `/images/image-product-${index}.jpg`
      document.getElementById('image').setAttribute('src', imagePath)
   }
   else{
      index = 1
   }
})

prevBtn.addEventListener('click', ()=>{
   index--
   if(index > 1){
      let imagePath = `/images/image-product-${index}.jpg`
      document.getElementById('image').setAttribute('src', imagePath)
   }
   else{
      index = 4
   }
})
