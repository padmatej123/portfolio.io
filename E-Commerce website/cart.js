
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let CloseCart = document.querySelector ("#close-cart");
//for open cart
jQuery(document).ready(function(){
jQuery(".cart").addClass("active");
})
jQuery("#close-cart").ready(function() {
jQuery(".cart").addClass("active");
})
if(document.readystate=="loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}
    // Making function
    function ready(){
    var reomveCartButtons = document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons);
    for(var i=0; i<reomveCartButtons.length; i++)
    {
    var button = reomveCartButtons[i];
    input.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var u=0;i<quantityInputs.length;i++)
    {
    var input = quantityInputs[i];
    input.addEventListener("click", quantityChanged);
    }
    //Add to cart
    var addCart = document.getElementsByClassName("cart-quantity");
    for(var u=0; i<quantityInputs.length; i++)
    {
    var button =addCart[i];
    input.addEventListener("click", quantityChanged);
    }
    document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click",buyButtonClicked); 
}
function buyButtonClicked(){
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes ()) {
    cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
    }
    //Remove item from cart
    function removeCartItem(event) {
    var buttonclicked = event.remove();
    buttonclicked.parentElement.remove();
    updatetotal();
    }
    //Quantity Changes
    function quantityChanged(event){ 
    var input=event.target;
    if(isNaN(input.value) || input.value<=0)
    {
    input.value=1;
    }
    updatetotal();
}
function addCartClicked(event){
    var button =event.target;
    var shopProducts=buttonparentElement;
    var title =shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price =shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
    }
function addProductToCart(title, price, productImg)
    {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems =document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i=0; i<cartItemNames.length; i++)
    {
        if (cartItemNames[i].innerText=title){

    alert("You are already add item to cart. Increase Your Product Quantity");
    return
    }
}
var cartBoxContent = '<img src="${productImg}" class="cart-img"> <div class="detail-box"><div class="cart-product-title">${title} </div><div class="cart-price">${price}</div><input type="number" value="1" class="cart-quantity"></div><!-----Remove a product from cart----><i class="fa-solid fa-trash cart-remove"></i>';
cartShopBox.innerHTML=cartBoxContent;
cartItems.append(cartShopBox);
updatetotal();
cartShopBox
.getElementsByClassName("cart-remove")[0]
.addEventListener("click", removeCartItem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change", removeCartItem);
cartShopBox
.getElementsByClassName("cart-price")[0]
.addEventListener("change", removeCartItem);
}

function updatetotal(){
    var cartContent=document.getElementsByClassName("cartPaat -content")[0];
    var cartBoxes=document.getElementsByClassName("cart-box")[0];
    var total=0;
    for(var i=0; i<cartBoxes.length; i++)
    {
    var cartBox= cartBoxes[i];
    var priceElement =cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement =cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat (priceElement.innerText.replace("Rs ", ""));
    var quantity = quantityElement.value;
    total=total+price*quantity;
    }
    //If price contains some cents value
    total-math.round(total*100)/100;
    document.getElementsByClassName("total-price")[0].innerText="RS" + total;
}
