import { question } from "readline-sync";
import { WithoutDiscount } from "./structural/Strategy/WithoutDiscount.js";
import { PercentageDiscount } from "./structural/Strategy/PercentageDiscount.js";
import { FixedDiscount } from "./structural/Strategy/FixedDiscount.js";
import { ShoppingCart } from "./structural/Strategy/ShoppingCart.js";

const withoutDiscount = new WithoutDiscount();
const tenPercentDiscount = new PercentageDiscount(10);
const fixedDiscount = new FixedDiscount(5);

const cart = new ShoppingCart(withoutDiscount);

const n = Number(question("How many items do you want to add?\n"));

for (let i = 0; i < n; ++i) {
  console.log(i + 1, "item");

  const name = question("Name: ");
  const price = Number(question("Price: "));
  cart.addItem(name, price);
}
console.log();

cart.showItems();

console.log("Итого без скидки:", cart.totalSum() + "$");

cart.setDiscountStrategy(tenPercentDiscount);
console.log("Итого с 10% скидкой:", cart.totalSum() + "$");

cart.setDiscountStrategy(fixedDiscount);
console.log("Итого с фиксированной скидкой $5:", cart.totalSum() + "$");
