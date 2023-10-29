import IPiece from "../IPiece.js";

export default class Pawn implements IPiece {
    move(): void {
        console.log("It moves forward on one or two cells");
    }

}