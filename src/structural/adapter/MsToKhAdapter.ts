import { ISpeedAdapter } from "./ISpeedAdapter.js";
import { ListMPS } from "./ListMPS.js";
export class MsToKhAdapter implements ISpeedAdapter {
  private ListMPS: ListMPS;
  constructor(ListMPS: ListMPS) {
    this.ListMPS = ListMPS;
  }
  getSpeeds(): number[] {
    return this.ListMPS.getSpeeds().map((speed) => speed * 3.6);
  }
  addSpeed(speed: number): void {
    this.ListMPS.add(speed / 3.6);
  }
}
