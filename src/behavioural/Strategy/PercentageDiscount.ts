import { IDiscountStrategy } from "./IDiscountStrategy.js";

export class PercentageDiscount implements IDiscountStrategy {
  constructor(private percentage: number) {}
  applyDiscount(price: number): number {
    return price * (1 - this.percentage / 100);
  }
}
