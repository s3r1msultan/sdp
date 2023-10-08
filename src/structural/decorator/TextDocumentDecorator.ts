import { TextDocument } from "./TextDocument.js";

export class TextDocumentDecorator implements TextDocument {
  constructor(protected document: TextDocument) {}

  getContent(): string {
    return this.document.getContent();
  }
}
