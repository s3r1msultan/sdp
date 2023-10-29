import IPiece from "../IPiece.js";

export default class Bishop implements IPiece {
    move(): void {
        console.log("Bishop moves only diagonal");
    }
    
}