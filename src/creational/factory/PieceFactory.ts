import IPiece from "./IPiece.js";


export default abstract class PieceFactory {
    abstract createPiece(pieceName: string): IPiece;
}