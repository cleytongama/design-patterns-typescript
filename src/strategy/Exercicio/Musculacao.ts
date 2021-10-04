import { Exercicio } from "./Exercicio";

export class Musculacao implements Exercicio {
    exercitar(): void {
        console.log("Fazer musculação")
    }
}