import Greeting from "/src/components/Greeting/Greeting";
import ShoppingList from "/src/components/ShoppingList/ShoppingList";
import OrderStatus from "/src/components/OrderStatus/OrderStatus";

import products from "/src/data/products.js";
import orders from "/src/data/orders.js";

import "./App.css";

export default function App() {
  return (
    <>
      <Greeting name={"Petro"} />
      <ShoppingList />
      <ShoppingList products={products} />
      <OrderStatus orderId={orders[0].orderId} status={orders[0].status} />
      <OrderStatus {...orders[1]} />
    </>
  );
}
