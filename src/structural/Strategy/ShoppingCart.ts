import { DiscountStrategy } from "./DiscountStrategy";

export class ShoppingCart {
  private items: { name: string; price: number }[] = [];

  constructor(private discountStrategy: DiscountStrategy) {}

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  public showItems(): void {
    this.items.forEach((item) => {
      console.log(item.name + ": " + item.price + "$");
    });
    console.log();
  }

  public setDiscountStrategy(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  totalSum(): number {
    const subtotal = this.items.reduce((total, item) => total + item.price, 0);
    return this.discountStrategy.applyDiscount(subtotal);
  }
}
