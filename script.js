// This is the boilerplate code given for you
// You can modify this code
// Product data
(() => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];

  const productList = document.getElementById("product-list");
  const cartList = document.getElementById("cart-list");
  const clearCartBtn = document.getElementById("clear-cart-btn");

  function getCart() {
	  const data = sessionStorage.getItem("cart");
	  return data ? JSON.parse(data) : [];
   }

  function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price}`;

      const btn = document.createElement("button");
      btn.textContent = "Add to Cart";

      btn.addEventListener("click", () => {
        const cart = getCart();
        cart.push(product);
        saveCart(cart);
        renderCart();
      });

      li.appendChild(btn);
      productList.appendChild(li);
    });
  }

  function renderCart() {
    const cart = getCart();
    cartList.innerHTML = "";

    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartList.appendChild(li);
    });
  }

  clearCartBtn.addEventListener("click", () => {
    sessionStorage.removeItem("cart");
    renderCart();
  });

  window.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
  });
})();
