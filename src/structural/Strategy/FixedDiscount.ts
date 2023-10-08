import { DiscountStrategy } from "./DiscountStrategy.js";

export class FixedDiscount implements DiscountStrategy {
  constructor(private discountAmount: number) {}
  applyDiscount(price: number): number {
    return price - this.discountAmount;
  }
}
