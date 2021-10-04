import users from './users.json'

type Plataform = 'Windows' | 'MacOs' | 'Linux';

type Accountinfo  = {
    id: number,
    name: string,
    idade: number | string
}

type AccountInfoResumo  = {
    lasname: string
}

type Info = Accountinfo & AccountInfoResumo


const account: Info = {
    id: 1,
    name: "Cleyton Gama",
    idade: 12,
    lasname: "Gama"
}

console.log(account)


type Feature = 'Single Player' | 'Multiplataform' | 'Co-op'

interface GameDetails {
    id: string,
    title:string,
    description: string,
    plataforms: Plataform[],
    feature: Feature[]
}
enum Colors {
    white = 'a',
    black = 'b'
}

console.log(Colors)