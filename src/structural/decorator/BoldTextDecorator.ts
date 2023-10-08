import { TextDocumentDecorator } from "./TextDocumentDecorator.js";

export class BoldTextDecorator extends TextDocumentDecorator {
  getContent(): string {
    return `<strong>${this.document.getContent()}</strong>`;
  }
}
