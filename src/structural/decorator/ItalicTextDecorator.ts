import { TextDocumentDecorator } from "./TextDocumentDecorator.js";

export class ItalicTextDecorator extends TextDocumentDecorator {
  getContent(): string {
    return `<em>${this.document.getContent()}</em>`;
  }
}
