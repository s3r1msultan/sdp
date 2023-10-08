import { question } from "readline-sync";
import { WithoutDiscount } from "./behavioural/Strategy/WithoutDiscount.js";
import { PercentageDiscount } from "./behavioural/Strategy/PercentageDiscount.js";
import { FixedDiscount } from "./behavioural/Strategy/FixedDiscount.js";
import { ShoppingCart } from "./behavioural/Strategy/ShoppingCart.js";
import { BasicTextDocument } from "./structural/decorator/BasicTextDocument.js";
import { BoldTextDecorator } from "./structural/decorator/BoldTextDecorator.js";
import { ItalicTextDecorator } from "./structural/decorator/ItalicTextDecorator.js";

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

console.log();

const text = question("Enter some text: ");

const basicText = new BasicTextDocument(text);
console.log("Базовый текст:", basicText.getContent());

const boldText = new BoldTextDecorator(basicText);
console.log("Текст с жирным стилем:", boldText.getContent());

const italicText = new ItalicTextDecorator(basicText);
console.log("Текст с курсивом:", italicText.getContent());

const boldAndItalicText = new BoldTextDecorator(
  new ItalicTextDecorator(basicText)
);
console.log("Текст с жирным и курсивом:", boldAndItalicText.getContent());
