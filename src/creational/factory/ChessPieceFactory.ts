import Bishop from "./ChessPieces/Bishop.js";
import King from "./ChessPieces/King.js";
import Knight from "./ChessPieces/Knight.js";
import Pawn from "./ChessPieces/Pawn.js";
import Queen from "./ChessPieces/Queen.js";
import Rook from "./ChessPieces/Rook.js";
import IPiece from "./IPiece.js";
import PieceFactory from "./PieceFactory.js";


export default class ChessPieceFactory extends PieceFactory {
	piece!: IPiece;
	createPiece(pieceName: string): IPiece {
		switch (pieceName.toLowerCase()) {
			case "rook":
				this.piece = new Rook();
				break;
			case "pawn":
				this.piece = new Pawn();
				break;
			case "bishop":
				this.piece = new Bishop();
				break;
			case "knight":
				this.piece = new Knight();
				break;
			case "queen":
				this.piece = new Queen();
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
