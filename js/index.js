const prompt = require("prompt-sync")()

for (let i = 0; i < 5; i++) {
    let totalVitorias = Number(prompt("Numero de Vitorias: "))
    let totalDerrotas = Number(prompt("Numero de Derrotas: "))

    // Função para calcular o saldo
    function historicoRankeada(vitorias, derrotas) {
        return (vitorias - derrotas)
    }

    //Atribuindo os valores dos prompt 
    let vitoriasTotais = historicoRankeada(totalVitorias, totalDerrotas)
    let nivel;


    //Derminar Nivel
    if (vitoriasTotais <= 10) {
        nivel = "Ferro"
    }
    else if (vitoriasTotais > 10 && vitoriasTotais <= 20) {
        nivel = "Bronze"
    }
    else if (vitoriasTotais > 20 && vitoriasTotais <= 50) {
        nivel = "Prata"
    }
    else if (vitoriasTotais > 50 && vitoriasTotais <= 80) {
        nivel = "ouro"
    }
    else if (vitoriasTotais > 80 && vitoriasTotais <= 90) {
        nivel = "Platina"

    }
    else if (vitoriasTotais > 90 && vitoriasTotais <= 100) {
        nivel = "Lendário"

    }
    else if (vitoriasTotais > 100) {
        nivel = "Imortal"

    }

    console.log(`"O Herói tem de saldo ${vitoriasTotais} é está no nível de ${nivel}.`)

}
