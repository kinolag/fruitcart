## Fruitcart

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This simple app :

• lets a user select the quantities of two fruits and add them to a cart

• calculates an order subtotal based on unit prices

• adjusts the subtotal if an offer has been activated (in this case by the client, but in a real scenario the same could be done by the admin)

• returns a message if trying to add items to cart when all quantities are equal to zero

• returns an alert if trying to place an order when no item has been added to the cart yet

• returns an alert to confirm an order has been placed. The page is then reset to the starting status.

_The layout is responsive and uses media queries._

### Why React?

State lets you update the quantities, subtotal, offer, discount and total in a convenient way.
Virtual DOM only updates the elements of the UI that have changed, without reloading the unchanged ones.
Props and callbacks can be passed between components helping to build a modular app.

### What next?

Prices and offers details are stored separately in a frontend data source, so they can be easily updated.
However, orders are not persisted in the first app version (which is a cart demo), but may be in the next one.
