import { Exercicio } from "./Exercicio";

  export default class Pessoa {
    public nome: String;
    public exercicioFavorito: Exercicio;
  
    constructor(nome: string, exercicioFavorito: Exercicio) {
      this.nome = nome;
      this.exercicioFavorito = exercicioFavorito;
    }
  
    exercitar(): void {
      console.log(`${ this.nome } decidiu: `);
      this.exercicioFavorito.exercitar()
    }
  
  }
  