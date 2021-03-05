'use strict';

// global variables
let branch = 'USMC'; // this is from global variable
const allProducts = [];
const usaProducts = [];
const usnProducts = [];
const usafProducts = [];
const usmcProducts = [];
const select = document.getElementById('gears');

// constructor functions
function Product(name, price, description, branch) {
	this.name = name;
	this.img = `../img/shoppingcart/${name}.jpg`;
	this.price = price;
	this.description = description;
	this.branch = branch;
	allProducts.push(this);
	this.sortProduct();
}

Product.prototype.sortProduct = function() {
	switch (this.branch) {
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

// helper functions
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
}

// functions and event handlers
function handleSelect(e) {
	let productName = e.target.value;
	let price = document.getElementById('price');
	let productTitle = document.getElementById('product-name');
	let description = document.getElementById('description');
	let img = document.getElementById('product-image');
	for (let product of allProducts) {
		if (productName === product.name) {
			price.textContent = `$ ${product.price}`;
			productTitle.textContent = productName;
			description.textContent = product.description;
			img.setAttribute('src', product.img);
			img.setAttribute('alt', product.name);
		}
	}
}

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

// only render branch related products out of all products
switch (branch) {
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

// add event listener to select element
select.addEventListener('change', handleSelect);