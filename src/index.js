const prompt = require("prompt-sync")()

//Armazena as entradas de dados nas variaveis
let numberOfVictories = Number(prompt('Numero de vitorias:'))
let numberOfDefeats = Number(prompt('Numero de derrotas:'))

//armazena o resultado da função calculateTotalWins
let totalWins = calculateTotalWins(numberOfVictories, numberOfDefeats)

//calcular a subtração das variaveis numberOfVictories e numberOfDefeats
function calculateTotalWins(victories, defeats) {
    let totalWins = victories - defeats
    return totalWins
}

// Função para calcular o nível com base na vitorias
function CalculateLevelPlayer(playerLevel) {

    // Objeto que mapeia os intervalos de vitorias para os níveis correspondentes
    const levelPatent = {
        Ferro: { min: 0, max: 10 },
        Bronze: { min: 11, max: 20 },
        Prata: { min: 21, max: 50 },
        Ouro: { min: 51, max: 80 },
        Platina: { min: 81, max: 90 },
        Lendario: { min: 91, max: 100 },
        Imortal: { min: 101, max: Infinity },
    }


    // Itera sobre os níveis e verifica em qual intervalo de vitorias valor se encaixa
    for (let level in levelPatent) {
        if (playerLevel >= levelPatent[level].min && playerLevel <= levelPatent[level].max) {

            return level //retorna o valor de level
        }
    }


}
//Atribui os valores da função calculateTotalWins para a função CalculateLevelPlayer.
let playerLevelFinal = CalculateLevelPlayer(totalWins)

//Exibi o resultado final
console.log(`"O Herói tem saldo de ${totalWins} vitórias é está no nível de ${playerLevelFinal}.`)
