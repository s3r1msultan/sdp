export interface IDiscountStrategy {
  applyDiscount(price: number): number;
}
