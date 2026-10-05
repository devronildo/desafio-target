// Valor da conta
const valor = 1000;

// Data de vencimento
const dataVencimento = new Date("2026-09-30");

// Data de hoje
const hoje = new Date();

// Remove o horário para comparar somente as datas
dataVencimento.setHours(0, 0, 0, 0);
hoje.setHours(0, 0, 0, 0);

// Calcula a diferença entre as datas
const diferenca = hoje - dataVencimento;

// Converte a diferença de milissegundos para dias
const diasAtraso = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
);

// Verifica se está atrasado
if (diasAtraso <= 0) {

    console.log("A conta não está atrasada.");
    console.log("Valor: R$ " + valor.toFixed(2));

} else {

    // Multa de 2,5% ao dia
    const percentualJuros = 0.025;

    // Calcula os juros
    const juros = valor * percentualJuros * diasAtraso;

    // Calcula o valor final
    const valorFinal = valor + juros;

    console.log("--------------------------------");
    console.log("Conta em atraso");
    console.log("--------------------------------");
    console.log("Valor original: R$ " + valor.toFixed(2));
    console.log("Dias de atraso: " + diasAtraso);
    console.log("Juros: R$ " + juros.toFixed(2));
    console.log("Valor final: R$ " + valorFinal.toFixed(2));
    console.log("--------------------------------");
}