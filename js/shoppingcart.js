'use strict';

const allProducts = [];

function Product(name, price, description, branch) {
    this.name = name;
    this.img = `../img/shoppingcart/${name}.jpg`;
    this.price = price;
    this.description = description;
    this.branch = branch;
    allProducts.push(this);
}

new Product('air force cup 1', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'AF');
new Product('air force pt shirt 1 (black)', 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'AF');
new Product('air force pt shirt 1 (grey)', 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'AF');
new Product('air force pt shorts 1 (light blue)', 15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'AF');
new Product('air force pt shorts 1 (solid blue)', 15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'AF');
new Product('air force training book 1', 7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'AF');
let imgs = document.getElementById('product-image');
imgs.setAttribute('src', allProducts[0].img);
