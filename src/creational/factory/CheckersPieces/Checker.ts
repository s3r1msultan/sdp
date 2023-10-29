import IPiece from "../IPiece.js";

export default class Checker implements IPiece {
    move(): void {
        console.log("Checker moves diagonal once")
    }

}