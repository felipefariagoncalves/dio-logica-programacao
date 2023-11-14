let nome = "Black Hero"
let quantXp = 2532

if (quantXp < 1000){
    quantXp = "Ferro"
}else if (quantXp >= 1001 && quantXp <= 2000){
    quantXp = "Bronze"
}else if (quantXp >= 2001 && quantXp <= 3000){
    quantXp = "Prata"
}else if (quantXp >= 6001 && quantXp <= 7000){
    quantXp = "Ouro"
}else if (quantXp >= 7001 && quantXp <= 8000){
    quantXp = "Platina"
}else if (quantXp >= 8001 && quantXp <= 9000){
    quantXp = "Ascendente"
}else if (quantXp >= 9001 && quantXp <= 10000){
    quantXp = "Imortal"
}else if (quantXp >= 10001){
    quantXp = "Radiante"
}else {
    quantXp = "Inválido"
}

console.log("O herói de nome", nome, "está no nível de",quantXp)