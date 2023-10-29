import IPiece from "../IPiece.js";

export default class Queen implements IPiece {
    move(): void {
        console.log("Queen moves horizontally, vertically and diagonal");
    }
    
}