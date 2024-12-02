// Array para armazenar os produtos
let products = [];

// Selecionar elementos
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');

// Função para renderizar produtos
function renderProducts() {
  productList.innerHTML = ''; // Limpa a lista
  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button class="delete" onclick="deleteProduct(${index})">🗑️</button>
    `;
    productList.appendChild(productCard);
  });
}

// Função para adicionar produto
productForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const price = parseFloat(document.getElementById('price').value);
  const image = document.getElementById('image').value;

  products.push({ name, price, image });
  renderProducts();
  productForm.reset();
});s

// Função para deletar produto
function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

// Renderizar inicialmente
renderProducts();
