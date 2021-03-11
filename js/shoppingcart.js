'use strict';

// global variables
let currentProduct = {};
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

function renderTableRow() {
	const tbody = document.querySelector('tbody');
	let tr = document.createElement('tr');
	
	createTdOrTh('X', tr); // first td in a table row
	
	let tdImg = document.createElement('td'); // second td in a table row
	let img = document.createElement('img');
	img.setAttribute('src', currentProduct.img);
	img.setAttribute('alt', currentProduct.name);
	img.setAttribute('width', 40);
	img.setAttribute('height', 40);
	tdImg.appendChild(img);
	tr.appendChild(tdImg);
	
	createTdOrTh(currentProduct.name, tr); // third td in a table row

	createTdOrTh(`$ ${currentProduct.price}`, tr); // fourth td in a table row

	
	let tdQuantity = document.createElement('td'); // fifth td in a table row
	let input = document.createElement('input');
	input.setAttribute('type', 'number');
	input.setAttribute('value', 1);
	tdQuantity.appendChild(input);
	tr.appendChild(tdQuantity);
	
	let total = parseInt(input.value) * currentProduct.price;

	createTdOrTh(`$ ${total}`, tr); // sixth td in a table row


	
	tbody.appendChild(tr);

	//-------------
	function handleChange(e) {
		let updatedTotal = e.target.value * currentProduct.price;

		console.log(updatedTotal);

		
	}
	input.addEventListener('change', handleChange);
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
	renderTableRow();
}

// handle to update the cart
function handleUpdate(e) {
	console.log(e.target);
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

// Temp code holding place for cart
function Cart(items) {
	this.items = items;
}

let cart = new Cart([]);

Cart.prototype.addItem = function(currentProduct) {
	for(let item of this.items) {
		if (item.name === currentProduct.name) {
			
		}
	}
}
