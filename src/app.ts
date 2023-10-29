import CheckersPieceFactory from "./creational/factory/CheckersPieceFactory.js";
import ChessPieceFactory from "./creational/factory/ChessPieceFactory.js";
import { ListMPS } from "./structural/adapter/ListMPS.js";
import { MsToKhAdapter } from "./structural/adapter/MsToKhAdapter.js";

// // Strategy pattern

// const withoutDiscount = new WithoutDiscount();
// const tenPercentDiscount = new PercentageDiscount(10);
// const fixedDiscount = new FixedDiscount(5);

// const cart = new ShoppingCart(withoutDiscount);

// const n = Number(question("How many items do you want to add?\n"));

// for (let i = 0; i < n; ++i) {
//   console.log(i + 1, "item");

//   const name = question("Name: ");
//   const price = Number(question("Price: "));
//   cart.addItem(name, price);
// }
// console.log();

// cart.showItems();

// console.log("Итого без скидки:", cart.totalSum() + "$");

// cart.setDiscountStrategy(tenPercentDiscount);
// console.log("Итого с 10% скидкой:", cart.totalSum() + "$");

// cart.setDiscountStrategy(fixedDiscount);
// console.log("Итого с фиксированной скидкой $5:", cart.totalSum() + "$");

// console.log();

// // Decorator pattern

// const text = question("Enter some text: ");

// const basicText = new BasicTextDocument(text);
// console.log("Базовый текст:", basicText.getContent());

// const boldText = new BoldTextDecorator(basicText);
// console.log("Текст с жирным стилем:", boldText.getContent());

// const italicText = new ItalicTextDecorator(basicText);
// console.log("Текст с курсивом:", italicText.getContent());

// const boldAndItalicText = new BoldTextDecorator(
//   new ItalicTextDecorator(basicText)
// );
// console.log("Текст с жирным и курсивом:", boldAndItalicText.getContent());

// Adapter pattern

const listMPS = new ListMPS();
const msToKhAdapter = new MsToKhAdapter(listMPS);

listMPS.add(100);
listMPS.add(200);

msToKhAdapter.addSpeed(180);
msToKhAdapter.addSpeed(144);

console.log(listMPS.getSpeeds());

console.log(msToKhAdapter.getSpeeds());

// Factory Pattern

const chessPieceFactory = new ChessPieceFactory();
const checkersPiecesFactory = new CheckersPieceFactory();

const rook = chessPieceFactory.createPiece("rook");
const queen = chessPieceFactory.createPiece("queen");

const checker = checkersPiecesFactory.createPiece("checker");
const king = checkersPiecesFactory.createPiece("king");

console.log();

rook.move();
queen.move();

checker.move();
king.move();
