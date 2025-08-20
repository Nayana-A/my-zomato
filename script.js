let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load menu dynamically
if (document.getElementById("menu")) {
  fetch("menu.json")
    .then(res => res.json())
    .then(data => {
      let menuDiv = document.getElementById("menu");
      data.forEach(item => {
        let div = document.createElement("div");
        div.className = "col-md-4 mb-3";
        div.innerHTML = `
          <div class="card p-3 shadow-sm">
            <h5>${item.name}</h5>
            <p>$${item.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
          </div>
        `;
        menuDiv.appendChild(div);
      });
    });
}

// Add to cart
function addToCart(id, name, price) {
  cart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Show cart
if (document.getElementById("cart")) {
  let cartList = document.getElementById("cart");
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(li);
  });
  document.getElementById("total").innerText = total.toFixed(2);
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// Checkout
function checkout() {
  alert("✅ Payment Successful! Thank you for your order.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
