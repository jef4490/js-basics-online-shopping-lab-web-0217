var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}



function removeFromCart(item) {
  var answer_cart = []
    for (var i = 0; i < cart.length; i++) {
      var current = Object.keys(cart[i])[0];
      if (item === current) {

      } else {
        answer_cart.push(current)
      }
    };
      if (answer_cart.length === cart.length) {
        console.log("That item is not in your cart.")
      } else {
          cart = answer_cart;
      } return cart;
  }

function placeOrder(creditcard) {
  if (creditcard) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditcard}.`)
    cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  } return cart;
}
