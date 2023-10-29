import { IDiscountStrategy } from "./IDiscountStrategy.js";

export class FixedDiscount implements IDiscountStrategy {
  constructor(private discountAmount: number) {}
  applyDiscount(price: number): number {
    return price - this.discountAmount;
  }
}
