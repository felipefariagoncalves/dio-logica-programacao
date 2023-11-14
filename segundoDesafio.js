let vitoria = 20
let derrota = 10
let saldo = calculaSaldo(vitoria, derrota)
let nivel = 'inicio'

checkLevel(saldo)

function calculaSaldo(vitoria, derrota) {
    return vitoria - derrota
}

function checkLevel(saldo) {
    if (saldo <= 10) { //No enunciado do exercício o 10 fica de fora da lista
        nivel = "Ferro"
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze"
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata"
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro"
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante"
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário"
    } else if (saldo >= 101) {
        nivel = "Imortal"
    }
}
console.log("O herói tem de saldo", saldo, "e está no nível", nivel)