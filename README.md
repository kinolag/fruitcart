## Fruitcart

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This simple app :

• lets a user select the quantities of two fruits and add them to a cart

• calculates the subtotal based on unit prices

• adjusts the subtotal if an offer has been activated (in this case by the client, but in a real scenario the same could be done by the admin)

• returns a message if trying to add items to cart when all quantities are equal to zero

• returns an alert if trying to place an order when no item has been added to the cart yet

• returns an alert to confirm an order has been placed. The page is then reset to the starting status.

[Why React?] 

State management helps updating the quantities, subtotal, total, offer and discount in a convenient way. 
Props and callbacks can be passes between components etc.

[What next?]

The orders are not persisted in the first version, but may be in the next version.
Prices and offers details are stored in a basic frontend data source.
