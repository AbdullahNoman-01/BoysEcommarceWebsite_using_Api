const review =()=>{
   fetch("https://ecommarce-api-boys.onrender.com/review/")
   .then((res)=>res.json())
   .then(data => displayReview(data));
};

const displayReview = (products) => {
  const parent = document.getElementById("review_container");
  parent.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("review_details");

    div.innerHTML = `
      <img src="photo/hi.webp" alt="">
      <div class="info">
        <h1>${product.user}</h1>
        <h2>${product.product}</h2>
      </div>
      <div class="comment">
        <p>Rating - ${product.rating}</p>
        <p><span>Comment - ${product.comment}</span></p>
      </div>
    `;

    parent.appendChild(div);
  });
};

review();