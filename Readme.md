# Introduction

This project aims to create a simple homepage for an app with a default loading page. The homepage will have a navigation bar (navbar) with three sections: Home, Product, and Add to Cart. Clicking on the "Product" section will load data from an external API in card format. Each card will display information such as price, category, image, and an "Add to Cart" button. When a user clicks on the "Add to Cart" button, the corresponding card data will be stored. The "Add to Cart" section will display all the items that have been added to the cart, and each item will have a "Remove Item" button to remove it from the cart.

# Default Loading

The homepage should load by default when the app starts. This means that when users open the app, they will see the homepage with the navigation bar.
Navbar

# The navbar should be fixed at the top of the page and contain the following sections:

    Home: This section will link to the homepage (the default page).
    Product: This section will link to the product page where data from the API will be displayed in card format.
    Add to Cart: This section will link to the cart page where all the items added to the cart will be displayed.

# Product Page

Clicking on the "Product" section in the navbar will navigate to the product page. On this page, the app will fetch data from the following API:

API: https://fakestoreapi.com/products

The data retrieved from the API will be displayed in card format. Each card will show the following information:

    Product Image: An image representing the product.
    Product Category: The category of the product.
    Product Price: The price of the product.
    Add to Cart Button: A button to add the item to the cart.

# Add to Cart Functionality

When the "Add to Cart" button on any card is clicked, the corresponding card data will be stored in the app. This means that the item will be added to the cart.
Add to Cart Section

The "Add to Cart" section in the navbar will display the items that have been added to the cart. Each item will be shown in a card format, similar to the product page, with the following information:

    Product Image: An image representing the product.
    Product Category: The category of the product.
    Product Price: The price of the product.
    Remove Item Button: A button to remove the item from the cart.

# Remove Item Functionality

Each item displayed in the "Add to Cart" section will have a "Remove Item" button. Clicking on this button will remove the item from the cart, meaning it will no longer be displayed in the "Add to Cart" section.
Summary

The project involves creating a homepage with a default loading page and a navigation bar containing three sections: Home, Product, and Add to Cart. The "Product" section will display data from an external API in card format. Each card will show the product image, category, price, and an "Add to Cart" button. Clicking on the "Add to Cart" button will add the item to the cart. The "Add to Cart" section will display all the items in card format, and each item will have a "Remove Item" button to remove it from the cart.