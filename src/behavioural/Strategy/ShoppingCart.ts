import { IDiscountStrategy } from "./IDiscountStrategy.js";

export class ShoppingCart {
  private items: { name: string; price: number }[] = [];

  constructor(private discountStrategy: IDiscountStrategy) {}

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  public showItems(): void {
    this.items.forEach((item) => {
      console.log(item.name + ": " + item.price + "$");
    });
    console.log();
  }

  public setDiscountStrategy(discountStrategy: IDiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  totalSum(): number {
    const subtotal = this.items.reduce((total, item) => total + item.price, 0);
    return this.discountStrategy.applyDiscount(subtotal);
  }
}
