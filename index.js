
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const addToCart = (product) => {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};


const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");

  if (count) {
    count.innerText = cart.length;
  }
};


const Product = () => {
  fetch("https://ecommarce-api-boys.onrender.com/product/demo_product/")
    .then((res) => res.json())
    .then((data) => displayProduct(data));
};

const displayProduct = (products) => {
  const parent = document.getElementById("product_container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product_card");

    div.onclick = () => {
      window.location.href = `details.html?id=${product.id}`;
    };

    div.innerHTML = `
      <img src="${product.image}" alt="">
      <span>${product.brand}</span>
      <h1>${product.name}</h1>
      <p>${product.discription.slice(0, 100)}</p>
      <h3>${product.price}</h3>
      <a class="cart" href="#">
        <i class="fa-sharp fa-solid fa-cart-arrow-down"></i>
      </a>
    `;

    const cartBtn = div.querySelector(".cart");

    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
    });

    parent.appendChild(div);
  });
};


const SummerProduct = () => {
  fetch("https://ecommarce-api-boys.onrender.com/product/summar_product/")
    .then((res) => res.json())
    .then((data) => displaySummer(data));
};

const displaySummer = (products) => {
  const parent = document.getElementById("SummerProduct");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product_card");

    div.innerHTML = `
      <img src="${product.image}" alt="">
      <span>${product.brand}</span>
      <h1>${product.name}</h1>
      <p>${product.discription.slice(0, 100)}</p>
      <h3>${product.price}</h3>
      <a class="cart" href="#">
        <i class="fa-sharp fa-solid fa-cart-arrow-down"></i>
      </a>
    `;

    const cartBtn = div.querySelector(".cart");

    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
    });

    parent.appendChild(div);
  });
};


const displayCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.getElementById("cart-body");
  const totalText = document.getElementById("total-price");

  if (!tbody) return;

  tbody.innerHTML = "";

  let total = 0;

  cart.forEach((product, index) => {
    total += parseFloat(product.price) || 0;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="${product.image}" width="60"></td>
      <td>${product.name}</td>
      <td>${product.price} Tk.</td>
      <td>
        <button onclick="removeFromCart(${index})">Remove</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  if (totalText) {
    totalText.innerText = `Total: ${total} Tk.`;
  }
};

// remove product
const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
  updateCartCount();
};


if (document.getElementById("product_container")) {
  Product();
}

if (document.getElementById("SummerProduct")) {
  SummerProduct();
}

if (document.getElementById("cart-body")) {
  displayCart();
}

updateCartCount();