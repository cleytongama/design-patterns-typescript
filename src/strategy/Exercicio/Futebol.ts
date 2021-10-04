import { Exercicio } from "./Exercicio";

export class Futebol implements Exercicio {
    exercitar(): void {
        console.log("Jogar futebol");
    }
}