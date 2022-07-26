calculatTotalPrice();
// get all increment buutons
var incButtons = document.querySelectorAll(".btn-plus");
//console.log(incButtons);
for (var i = 0; i < incButtons.length; i++) {
  incButtons[i].addEventListener("click", function (event) {
    setQuantityFor(event.target);
  });
}
// get all decrement buutons
//
var numberitems = document.querySelector(".items span");
//
var decButtons = document.querySelectorAll(".btn-minus");
console.log(decButtons);
for (var i = 0; i < decButtons.length; i++) {
  decButtons[i].addEventListener("click", function (event) {
    //console.dir(event.target);
    setQuantityFor(event.target);
  });
}
//decrement increement button
function setQuantityFor(btn) {
  if (btn.className.includes("btn-minus") === true) {
    var span = btn.previousElementSibling;
    //console.log("prvious" + btn.previousElementSibling);
    if (span.innerText > 1) {
      span.innerText--;
      numberitems.innerText--;
    }
  }

  if (btn.className.includes("btn-plus") === true) {
    //console.log("next" + btn.nextElementSibling);
    var span = btn.nextElementSibling;
    span.innerText++;
    numberitems.innerText++;
  }
  calculatTotalPrice();
}

//get all remove button
var removeicon = document.querySelectorAll(".remove");
for (var i = 0; i < removeicon.length; i++) {
  removeicon[i].addEventListener("click", function (event) {
    //console.log(event.target.parentElement.parentElement.parentElement);
    //var product = event.target.parentElement.parentElement.parentElement;
    var product = event.target.closest(".Cart-Items");
    product.remove();
    calculatTotalPrice();
  });
}
//calculat total price
function calculatTotalPrice() {
  //GET ALL CART ITEMS
  var cartItems = document.querySelectorAll(".Cart-Items");
  //initialize total price
  var totalprice = 0;

  //initialize the totale price
  for (var i = 0; i < cartItems.length; i++) {
    //console.log(cartItems[i]);
    var unitprice = cartItems[i].querySelector(
      ".prices .amount span"
    ).innerText;
    var quantity = cartItems[i].querySelector(
      ".counter  .count span"
    ).innerText;
    //console.log(unitprice);
    //console.log(quantity);
    //console.log(cartItems[i].querySelector(".prices .amount span"));
    totalprice += unitprice * quantity;
  }
  var totaleamount = document.querySelector(".total .total-amount span");
  totaleamount.innerText = totalprice;
  //console.log(totalprice);
}
