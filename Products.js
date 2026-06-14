async function loadProducts() {

  const response =
    await fetch("data/products.json");

  const products =
    await response.json();

  displayProducts(products);

  document
    .getElementById("search")
    .addEventListener("input", e => {

      const filtered =
        products.filter(product =>
          product.name
          .toLowerCase()
          .includes(
            e.target.value.toLowerCase()
          )
        );

      displayProducts(filtered);
    });
}

function displayProducts(products) {

  const container =
    document.getElementById(
      "productContainer"
    );

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;
  });
}

loadProducts();
