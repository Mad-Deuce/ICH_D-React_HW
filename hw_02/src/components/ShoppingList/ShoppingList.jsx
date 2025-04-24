import "./ShoppingList.css";

export default function ShoppingList({ products = [] }) {
  const elements = products.map((item) => (
    <li key={item.id}>{item.product_name}</li>
  ));

  return (
    <>{products.length ? <ul>{elements}</ul> : <p>Shopping list is empty</p>}</>
  );
}
