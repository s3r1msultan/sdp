export class ListMPS {
  private speeds: number[] = [];
  addSpeed(speed: number): void {
    this.speeds.push(speed);
  }
  getSpeeds(): number[] {
    return this.speeds;
  }
}
