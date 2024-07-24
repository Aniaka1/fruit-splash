//background picture js code
const background = document.querySelectorAll(".fruitsplash-wrapper");
let activeBackground = 0;

//function for changing background postively
function increaseBackground(){
    background[activeBackground].className = "fruitsplash-wrapper";
    activeBackground++;
    if(activeBackground > 5){
        activeBackground = 0;
    }
    let currentBackground = background[activeBackground];
    currentBackground.classList.add(currentBackground.getAttribute("active-element"))
}

//function for changing background negatively
function decreaseBackground(){
    background[activeBackground].className = "fruitsplash-wrapper";
    activeBackground--;
    if(activeBackground < 0){
        activeBackground = 5;
    }
    currentBackground = background[activeBackground];
    currentBackground.classList.add(currentBackground.getAttribute("active-element"))
}

//dot changing js
const dots = document.querySelectorAll(".circle");
let activeDots = 0;

function increaseDots(){
    dots[activeDots].className = "circle";
    activeDots++;
    if(activeDots > 5){
        activeDots = 0;
    }
    currentDots = dots[activeDots];
    currentDots.classList.add(currentDots.getAttribute("color"))
}

function decreaseDots(){
    dots[activeDots].className = "circle";
    activeDots--;
    if(activeDots < 0){
        activeDots = 5;
    }
    currentDots = dots[activeDots];
    currentDots.classList.add(currentDots.getAttribute("color"))
}

//image display changing js
const imageDisplay = document.querySelectorAll(".fruitsplash-image-display");
let activeDisplay = 0;

function increaseDisplay(){
    imageDisplay[activeDisplay].className = "fruitsplash-image-display";
    activeDisplay++;
    if(activeDisplay > 5){
        activeDisplay = 0;
    }
    currentDisplay = imageDisplay[activeDisplay];
    currentDisplay.classList.add(currentDisplay.getAttribute("display-element"))
}

function decreaseDisplay(){
    imageDisplay[activeDisplay].className = "fruitsplash-image-display";
    activeDisplay--;
    if(activeDisplay < 0){
        activeDisplay = 5;
    }
    currentDisplay = imageDisplay[activeDisplay];
    currentDisplay.classList.add(currentDisplay.getAttribute("display-element"))
}

//waiting image js
const waitingImage = document.querySelectorAll(".fruitsplash-image-wait");
let activeWait = 0;

function increaseWait (){
    waitingImage[activeWait].className = "fruitsplash-image-wait";
    activeWait++;
    if(activeWait > 5){
        activeWait = 0;
    }
    currentWaitImage = waitingImage[activeWait];
    currentWaitImage.classList.add(currentWaitImage.getAttribute("wait-element"))
}

function decreaseWait(){
    waitingImage[activeWait].className = "fruitsplash-image-wait";
    activeWait--;
    if(activeWait < 0){
        activeWait = 5;
    }
    currentWaitImage = waitingImage[activeWait];
    currentWaitImage.classList.add(currentWaitImage.getAttribute("wait-element"))
}

//scroll click js code
const forwardClick = document.querySelector(".fruitsplash-dot-rightbtn");
const backwardClick = document.querySelector(".fruitsplash-dot-leftbtn");

forwardClick.onclick = ()=>{
    increaseBackground();
    increaseDots();
    increaseDisplay();
    increaseWait();
    cart.classList.remove("active");
}

backwardClick.onclick = ()=>{
    decreaseBackground();
    decreaseDots();
    decreaseDisplay();
    decreaseWait();
    cart.classList.remove("active");
}

//cart working js
//opening and closing cart 
const cartBtn = document.querySelectorAll(".navbar-cart-logo");
const cart = document.querySelector(".fruitsplash-cart-container");
const closeBtn = document.querySelector(".fruitsplash-cart-close");
const showCart = document.querySelectorAll(".fruitsplash-image-cart");

for(let i = 0; i < cartBtn.length; i++){
   let mainBtn = cartBtn[i];
    mainBtn.onclick = ()=>{
    cart.classList.add("active");
}
}

closeBtn.onclick = ()=>{
    cart.classList.remove("active");
}

for(let i = 0; i < showCart.length; i++){
    let activeShow = showCart[i];
    activeShow.onclick = ()=>{
        cart.classList.toggle("active");
    }
}

//cart content showing and updating
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}

function ready(){
    let removeCartBtn = document.getElementsByClassName("#fruitsplash-cart-remove");
    for(let i = 0; i < removeCartBtn.length; i++){
        let button = removeCartBtn[i];
        button.addEventListener("click",removeCartItem);
    }
    let quantityInput = document.getElementsByClassName("cart-quantity");
    for(let i = 0; i < quantityInput.length; i++){
        let quantityBtn = quantityInput[i];
        quantityBtn.addEventListener("click",quantityChanged);
    }
    let addCart = document.getElementsByClassName("add-to-cart");
    for(let i = 0; i < addCart.length;i++){
        let cartBtn = addCart[i];
        cartBtn.addEventListener("click",addCartClicked);
    }
    document.getElementsByClassName("fruitsplash-cart-btn")[0].addEventListener("click",buyButtonClicked);
    console.log("ready")
}

function buyButtonClicked(){
    alert("Your Order has been placed");
    let cartContent = document.getElementsByClassName("fruitsplash-cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event){
    let button = event.target;
    let shopProduct = button.parentElement;
    let title = shopProduct.querySelector(".fruitsplash-title").innerText;
    let price = shopProduct.querySelector(".fruitsplash-price").innerText;
    let productImg = shopProduct.querySelector(".fruitsplash-image").src;
    addProductToCart(title,price,productImg);
    updateTotal();
}

function addProductToCart(title,price,productImg){
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add("cart-box");
    let cartItem = document.getElementsByClassName("fruitsplash-cart-content")[0];
    let cartItemName = cartItem.getElementsByClassName("cart-product-title");
    for(let i = 0; i < cartItemName.length;i++){
        let cartTitle = cartItemName[i];
        if(cartTitle.innerText == title){
            alert("Item already added to cart");
        }
    }
    let cartItemBox =`<img src="${productImg}" alt="" class="cart-product-image">
                      <div class="product-detail">
                      <div class="cart-product-title">${title}</div>
                       <div class="cart-price">${price}</div>
                       <input type="number" value="1" class="cart-quantity">
                       </div>
                       <i class="bx bxs-trash" id="fruitsplash-cart-remove"></i>`
    cartShopBox.innerHTML = cartItemBox;
    cartItem.append(cartShopBox);
    cartShopBox.querySelectorAll("#fruitsplash-cart-remove")[0].addEventListener("click",removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);
}
 
function updateTotal(){
    let cartContent = document.getElementsByClassName("fruitsplash-cart-content")[0];
    let cartBoxes = document.getElementsByClassName("cart-box");
    let total = 0;
    for(let i = 0; i < cartBoxes.length;i++){
        let cartItem = cartBoxes[i];
        let cartPrice = cartItem.getElementsByClassName("cart-price")[0];
        let cartQuantity = cartItem.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(cartPrice.innerText.replace("$",""));
        let quantity = cartQuantity.value;
         total = total + (price * quantity);
    }
    total = Math.round(total * 100)/ 100;
    document.getElementsByClassName("fruitsplash-cart-total")[0].innerText = `Total = $${total}`;
}