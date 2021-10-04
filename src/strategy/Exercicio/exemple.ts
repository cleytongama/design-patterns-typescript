enum ExercicioFavorito {
  Correr, Futebol, Musculação
}

class Pessoa {
  public nome: String;
  public exercicioFavorito: ExercicioFavorito;

  constructor(nome: string, exercicioFavorito: ExercicioFavorito) {
    this.nome = nome;
    this.exercicioFavorito = exercicioFavorito;
  }

  exercitar(): void {
    console.log(`${ this.nome } decidiu: `);
    if(this.exercicioFavorito == ExercicioFavorito.Correr) {
      console.log('Correr uma maratona')
    } else if (this.exercicioFavorito == ExercicioFavorito.Futebol) {
      console.log('Jogar futebol com os amigos')
    } else if (this.exercicioFavorito  == ExercicioFavorito.Musculação) {
      console.log('Fazer musculação na academia')
    }
  }

}

// Testar a função
const Carlos = new Pessoa('Carlos', ExercicioFavorito.Correr)
Carlos.exercitar()