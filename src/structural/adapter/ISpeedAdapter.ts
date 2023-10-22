export interface ISpeedAdapter {
  getSpeeds(): number[];
  addSpeed(speed: number): void;
}
