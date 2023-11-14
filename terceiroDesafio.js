class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        if (this.tipo === "Mago"){
            ataque = "Magia"
        } else if  (this.tipo === "Guerreiro"){
            ataque = "Espada"
        } else if  (this.tipo === "Monge"){
            ataque = "Artes Marciais"
        } else if  (this.tipo === "Ninja"){
            ataque = "Shuriken"
        }

    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
const heroi1 = new hero("Felipe", 39, "Guerreiro")
const heroi2 = new hero("Zeus", 56, "Mago")

heroi1.atacar()
heroi2.atacar()