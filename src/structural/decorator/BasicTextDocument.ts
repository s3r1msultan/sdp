import { TextDocument } from "./TextDocument.js";

export class BasicTextDocument implements TextDocument {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}
