export class ListMPS {
  private speeds: number[] = [];
  add(speed: number): void {
    this.speeds.push(speed);
  }
  getSpeeds(): number[] {
    return this.speeds;
  }
}
