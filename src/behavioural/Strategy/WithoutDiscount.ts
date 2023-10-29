import { IDiscountStrategy } from "./IDiscountStrategy.js";

export class WithoutDiscount implements IDiscountStrategy {
  applyDiscount(price: number): number {
    return price;
  }
}
