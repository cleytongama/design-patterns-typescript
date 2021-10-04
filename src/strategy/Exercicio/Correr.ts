import { Exercicio } from "./Exercicio";

export class Correr implements Exercicio{
    exercitar(): void {
        console.log("Correr um maratona")
    }
}