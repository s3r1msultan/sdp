import Checker from "./CheckersPieces/Checker.js";
import King from "./CheckersPieces/King.js";
import IPiece from "./IPiece.js";
import PieceFactory from "./PieceFactory.js";

export default class CheckersPieceFactory extends PieceFactory {
	piece!: IPiece;
	createPiece(pieceName: string): IPiece {
		switch (pieceName.toLowerCase()) {
			case "checker":
				this.piece = new Checker();
				break;
			case "king":
				this.piece = new King();
				break;
			default:
				break;
		}
		return this.piece;
	}
}
