'use strict';

// global variables
let currentProduct = {};
let updatedQuantity = {};
let updatingProduct = [];
let updatingQuantity = [];
const allProducts = [];
const usaProducts = [];
const usnProducts = [];
const usafProducts = [];
const usmcProducts = [];
const select = document.getElementById('gears');
const addToCart = document.getElementById('add-product');
const updateCart = document.getElementById('update-cart');

// constructor functions
function Product(name, price, description, branch) {
	this.name = name;
	this.img = `img/shoppingcart/${name}.jpg`;
	this.price = price;
	this.description = description;
	this.branch = branch;
	allProducts.push(this);
	this.sortProduct();
}

Product.prototype.sortProduct = function() {
	switch(this.branch) {
		case 'USA':
			usaProducts.push(this);
			break;
		case 'USN':
			usnProducts.push(this);
			break;
		case 'USAF':
			usafProducts.push(this);
			break;
		case 'USMC':
			usmcProducts.push(this);
			break;
		default:
			console.log('When use this constructor, pass USA or USN or USAF or USMC for branch argument!')
	}
}

/*-------- helper functions --------------------------------------------------------*/
// convert the data from local storage to the data format I needed
function getBranchAbbr(branch) {
	let result;
	switch(branch) {
		case 'isArmy':
			result = 'USA';
			break;
		case 'isNavy':
			result = 'USN';
			break;
		case 'isMarines':
			result = 'USMC';
			break;
		case 'isAirforce':
			result = 'USAF';
			break;
		default:
			console.log('This will not happen!');
	}
	return result;
}
// render function for drop-down menu
function renderDropdown(products) {
	for (let product of products) {
		let option = document.createElement('option');
		option.setAttribute('value', product.name);
		option.textContent = product.name;
		select.appendChild(option);
	}
}

// render default product
function renderDefaultProduct(product) {
	document.getElementById('price').textContent = `$ ${product.price}`;
	document.getElementById('product-name').textContent = product.name;
	document.getElementById('description').textContent = product.description;
	let img = document.getElementById('product-image');
	img.setAttribute('src', product.img);
	img.setAttribute('alt', product.name);
}

// render product section
function renderProductSection(productsArr) {
	renderDropdown(productsArr);
	renderDefaultProduct(productsArr[0]); // when page loads, render the first product in the drop down.
	currentProduct = productsArr[0];
}

// create appropriate tds for a table row in a table body and render it
function createTdOrTh(textContent, parentEl) {
	let td = document.createElement('td');
	td.textContent = textContent;
	parentEl.appendChild(td);
}

// create ths for a table row in a table head and render it
function renderTableHead() {
	const thead = document.querySelector('thead');
	const tr = document.createElement('tr');
	createTdOrTh('', tr);
	createTdOrTh('', tr);
	createTdOrTh('Product', tr);
	createTdOrTh('Price', tr);
	createTdOrTh('Quantity', tr);
	createTdOrTh('Total', tr);
	thead.appendChild(tr);
}

function renderTableRow(product) {
	const tbody = document.querySelector('tbody');
	let tr = document.createElement('tr');

	// first td in a table row - remove button
	let tdButton = document.createElement('td');
	let button = document.createElement('button');
	button.textContent = 'X';
	button.setAttribute('name', product.name);
	tdButton.appendChild(button);
	tr.appendChild(tdButton);
	button.addEventListener('click', handleRemove);

	function handleRemove(e) {
		cart.deleteItem(e.target.name);
		reRenderTableBody();
		renderCartTotal();
	}
	
	// second td in a table row - image
	let tdImg = document.createElement('td');
	let img = document.createElement('img');
	img.setAttribute('src', product.img);
	img.setAttribute('alt', product.name);
	img.setAttribute('width', 40);
	img.setAttribute('height', 40);
	tdImg.appendChild(img);
	tr.appendChild(tdImg);
	
	createTdOrTh(product.name, tr); // third td in a table row - product
	createTdOrTh(`$ ${product.price}`, tr); // fourth td in a table row - price

	// fifth td in a table row - quantity
	let tdQuantity = document.createElement('td');
	let input = document.createElement('input');
	input.setAttribute('type', 'number');
	input.setAttribute('name', product.name);
	input.setAttribute('value', product.quantity);
	tdQuantity.appendChild(input);
	tr.appendChild(tdQuantity);
	
	// sixth td in a table row - total
	let total = product.quantity * product.price;
	createTdOrTh(`$ ${total}`, tr);
	tbody.appendChild(tr);

	// monitor input field change
	function handleChange(e) {
		updatedQuantity[e.target.name] = e.target.value;
	}
	input.addEventListener('change', handleChange);
}

function reRenderTableBody() {
	cart.items = JSON.parse(localStorage.getItem('cart'));
	clearCart();
	for (let item of cart.items) {
		renderTableRow(item);
	}
}

function clearCart() {
	let tbody = document.querySelector('tbody');
	while(tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}
}

function renderCartTotal() {
	let subtotal = document.getElementById('subtotal');
	let tax = document.getElementById('tax');
	let total = document.getElementById('total');
	let cart = JSON.parse(localStorage.getItem('cart'));
	let subTotal = 0;
	for (let item of cart) {
		subTotal += (+item.price * +item.quantity);
	}
	subtotal.textContent = subTotal;
	tax.textContent = (subTotal * 0.1).toFixed(2);
	total.textContent = (subTotal * 1.1).toFixed(2);
}

/*-------- functions and event handlers --------------------------------------------------------*/
// event handler for choosing a product from the drop-down menu
function handleSelect(e) {
	let productName = e.target.value;
	let price = document.getElementById('price');
	let productTitle = document.getElementById('product-name');
	let description = document.getElementById('description');
	let img = document.getElementById('product-image');
	for (let product of allProducts) {
		if (productName === product.name) {
			currentProduct = product;
			price.textContent = `$ ${product.price}`;
			productTitle.textContent = productName;
			description.textContent = product.description;
			img.setAttribute('src', product.img);
			img.setAttribute('alt', product.name);
			break;
		}
	}
}

// event handler for clicking the 'add to cart' button -> will render a table upon click
function handleAdd(e) { // render a table upon clicking the "Add To Cart" button
	document.getElementById('table').style.display = 'block';
	document.getElementById('cart-total').style.display = 'block';

	if (!document.querySelector('thead').children.length) { // only render table head when it is not exist
		renderTableHead();
	}
	cart.addItem(currentProduct);
	reRenderTableBody();
	renderCartTotal();
}

// handle to update the cart
function handleUpdate(e) {
	for (let name in updatedQuantity) { // sample updatedQuantity: {usmc fitness book: "20", usmc pt shirt 1: "9"}
		cart.updateCart(name, +updatedQuantity[name])
	}
	reRenderTableBody();
	renderCartTotal();
}

/* -------------- Instantiate 24 products ---------------------------------------------------------*/
new Product('air force cup 1', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USAF');
new Product('air force pt shirt 1 (black)', 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USAF');
new Product('air force pt shirt 1 (grey)', 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USAF');
new Product('air force pt shorts 1 (light blue)', 15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USAF');
new Product('air force pt shorts 1 (solid blue)', 15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USAF');
new Product('air force training book 1', 7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USAF');
new Product('army fitness book 1', 12, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USA');
new Product('army pt shirt 1 (black)', 25, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USA');
new Product('army pt shirt 1 (grey)', 25, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USA');
new Product('army pt shorts 1 (long)', 18, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USA');
new Product('army pt shorts 1 (short)', 18, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USA');
new Product('army shaker cup', 8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USA');
new Product('navy cup 1', 12, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USN');
new Product('navy pt book 1', 6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USN');
new Product('navy pt shirt 1 (blue)', 24, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USN');
new Product('navy pt shirt 1 (yellow)', 24, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USN');
new Product('navy pt shorts 1 (baggy)', 16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USN');
new Product('navy pt shorts 1 (skin)', 16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USN');
new Product('usmc fitness book', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USMC');
new Product('usmc pt shirt 1 (green)', 30, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USMC');
new Product('usmc pt shirt 1', 30, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USMC');
new Product('usmc pt shorts 1 black', 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USMC');
new Product('usmc pt shorts 1 green', 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USMC');
new Product('usmc shaker cup 1', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'USMC');

/*-------- Excutable code - render page ----------------------------------------------------------------------*/
// only render branch related products out of all products
let branch = localStorage.getItem('clickTotal');
// need to transform the data in the localStorage to the format I needed
let branchAbbr = getBranchAbbr(localStorage.getItem('clickTotal'));
switch(branchAbbr) {
	case 'USA':
		renderProductSection(usaProducts);
		break;
	case 'USN':
		renderProductSection(usnProducts);
		break;
	case 'USAF':
		renderProductSection(usafProducts);
		break;
	case 'USMC':
		renderProductSection(usmcProducts);
		break;
	default:
		console.log('Should not be any errors.');
}


/*-------- Event Listener --------------------------------------------------------------------*/
select.addEventListener('change', handleSelect);
addToCart.addEventListener('click', handleAdd);
updateCart.addEventListener('click', handleUpdate);

// Temp code holding place for cart-------------------------------------------------------
function Cart(items) {
	this.items = items;
}

Cart.prototype.addItem = function(product) {
	let isSameProduct = false;
	for(let item of this.items) {
		if (item.name === product.name) {
			item.quantity++;
			isSameProduct = true;
			break;
		}
	}
	if (!isSameProduct) {
		let item = product;
		item.quantity = 1;
		this.items.push(item);
	}
	localStorage.setItem('cart', JSON.stringify(this.items));
}

Cart.prototype.updateCart = function(product, quantity) {
	for (let item of this.items) {
		if (item.name === product) {
			item.quantity = quantity;
			break;
		}
	}
	localStorage.setItem('cart', JSON.stringify(this.items));
}

Cart.prototype.deleteItem = function(product) {
	for (let i = 0; i < this.items.length; i++) {
		if (this.items[i].name === product) {
			this.items.splice(i, 1);
			break;
		}
	}
	localStorage.setItem('cart', JSON.stringify(this.items));
}

let cart = new Cart([]);
if (localStorage.getItem('cart')) {
	cart.items = JSON.parse(localStorage.getItem('cart'));
}