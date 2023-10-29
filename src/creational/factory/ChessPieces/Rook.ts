import IPiece from "../IPiece.js";

export default class Rook implements IPiece {
    move(): void {
        console.log("Rook moves horizontally and vertically");
    }
    
}