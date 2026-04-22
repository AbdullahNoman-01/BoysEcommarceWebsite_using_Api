// URL থেকে id নেওয়া
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("https://ecommarce-api-boys.onrender.com/product/demo_product/")
  .then((res) => res.json())
  .then((data) => {
    const product = data.find((p) => p.id == id);
    showDetails(product);
  });


const showDetails = (product) => {
  const parent = document.getElementById("details");

  parent.innerHTML = `
    <img src="${product.image}" alt="">
        <div id="de_information">
          <h1>${product.name}</h1>
          <div class="p_status">
            <h4><span>${product.category}</span></h4>
            <h4>${product.stock_status}</h4>
          </div>
          <p>${product.discription}</p>
          <h3>Price - ${product.price}</h3>
          <button>Add to Cart</button>
          <a href="shop.html"><i class="fa-sharp fa-solid fa-circle-xmark" style="color: rgb(118, 24, 33);"></i></a>
        </div>
  `;
};
