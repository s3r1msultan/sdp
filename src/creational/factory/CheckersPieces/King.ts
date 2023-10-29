import IPiece from "../IPiece.js";

export default class King implements IPiece {
    move(): void {
        console.log("King moves diagonal as many times as possible")
    }
    
}