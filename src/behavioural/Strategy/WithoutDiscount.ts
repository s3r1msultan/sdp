import { DiscountStrategy } from "./DiscountStrategy.js";

export class WithoutDiscount implements DiscountStrategy {
  applyDiscount(price: number): number {
    return price;
  }
}
