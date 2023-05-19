// --------------------------------------connexion-------------------------------------
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".connexion");
let formClose = document.querySelector("#form-close");

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
// ------------------------------------end connexion-------------------------------------

//----------------------------- cart------------------------------------
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};
//  cart working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMcontentLoaded", ready);
} else {
  ready();
}
// making function
function ready() {
  // reomve Items from cart
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons);
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //   quantity changed
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addcartClicked);
  }
}

// remove Items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// Quantity changes
function quantityChanged(event) {
  var input = event.target;
  if (isNAN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
// add to cart
function addcartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  // cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    alert("you have already add this item to cart");
  }
}

// update total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    // if price contain some cents value
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}
//----------------------------- end cart------------------------------------
