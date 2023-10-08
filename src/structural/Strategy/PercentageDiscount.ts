import { DiscountStrategy } from "./DiscountStrategy.js";

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}
  applyDiscount(price: number): number {
    return price * (1 - this.percentage / 100);
  }
}
