// Problem 8: Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const calculateTotalCost = (cart: Product[]): number => {
  return cart.reduce((totalCost, product) => {
    const productPrice = product.price * product.quantity;
    return totalCost + productPrice;
  }, 0);
};

const shoppingCart: Product[] = [
  {
    name: "A",
    price: 50,
    quantity: 4,
  },
  {
    name: "A",
    price: 50,
    quantity: 0,
  },
];

console.log(calculateTotalCost(shoppingCart));
