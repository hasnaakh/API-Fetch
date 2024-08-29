// Fetching data from the API
// fetch('https://dummyjson.com/products')
// fetch('https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io')
fetch('http://localhost:3000/api/v1/students')

  .then(response => response.json())
  // .then(console.log)
  .then(data => {
    console.log(data)
    displayProducts(data);  // Call function to display products
    // displayProducts(data.products);  // Call function to display products
  }
)
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('product-list').innerHTML = '<p class="text-danger">Failed to fetch products.</p>';
  });

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById('product-list');

  // Clear any existing content
  productList.innerHTML = '';

  products.forEach(product => {
    // Create a card for each product
    const productCard = document.createElement('div');
    productCard.className = 'card mb-3';
    productCard.style.maxWidth = '18rem';

    // productCard.innerHTML = `
    //   // <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
    //   <div class="card-body">
    //     <h5 class="card-title">${product.username}</h5>
    //     <p class="card-text">${product.role}</p>
    //     <p class="card-text"><small class="text-muted">Price: $${product.email}</small></p>
    //   </div>
    // `;

     productCard.innerHTML = `
      
      <div class="card-body">
        <h5 class="card-title">${product.username}</h5>
        <p class="card-text">${product.role}</p>
        <p class="card-text"><small class="text-muted">Email: ${product.email}</small></p>
      </div>
    `;

    productList.appendChild(productCard);
  });
}
