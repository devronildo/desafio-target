const dados = {
    vendas: [
        { vendedor: "João Silva", valor: 1200.50 },
        { vendedor: "João Silva", valor: 950.75 },
        { vendedor: "João Silva", valor: 1800.00 },
        { vendedor: "João Silva", valor: 1400.30 },
        { vendedor: "João Silva", valor: 1100.90 },
        { vendedor: "João Silva", valor: 1550.00 },
        { vendedor: "João Silva", valor: 1700.80 },
        { vendedor: "João Silva", valor: 250.30 },
        { vendedor: "João Silva", valor: 480.75 },
        { vendedor: "João Silva", valor: 320.40 },

        { vendedor: "Maria Souza", valor: 2100.40 },
        { vendedor: "Maria Souza", valor: 1350.60 },
        { vendedor: "Maria Souza", valor: 950.20 },
        { vendedor: "Maria Souza", valor: 1600.75 },
        { vendedor: "Maria Souza", valor: 1750.00 },
        { vendedor: "Maria Souza", valor: 1450.90 },
        { vendedor: "Maria Souza", valor: 400.50 },
        { vendedor: "Maria Souza", valor: 180.20 },
        { vendedor: "Maria Souza", valor: 90.75 },

        { vendedor: "Carlos Oliveira", valor: 800.50 },
        { vendedor: "Carlos Oliveira", valor: 1200.00 },
        { vendedor: "Carlos Oliveira", valor: 1950.30 },
        { vendedor: "Carlos Oliveira", valor: 1750.80 },
        { vendedor: "Carlos Oliveira", valor: 1300.60 },
        { vendedor: "Carlos Oliveira", valor: 300.40 },
        { vendedor: "Carlos Oliveira", valor: 500.00 },
        { vendedor: "Carlos Oliveira", valor: 125.75 },

        { vendedor: "Ana Lima", valor: 1000.00 },
        { vendedor: "Ana Lima", valor: 1100.50 },
        { vendedor: "Ana Lima", valor: 1250.75 },
        { vendedor: "Ana Lima", valor: 1400.20 },
        { vendedor: "Ana Lima", valor: 1550.90 },
        { vendedor: "Ana Lima", valor: 1650.00 },
        { vendedor: "Ana Lima", valor: 75.30 },
        { vendedor: "Ana Lima", valor: 420.90 },
        { vendedor: "Ana Lima", valor: 315.40 }
    ]
};

const comissoes = {};

// Percorre todas as vendas
dados.vendas.forEach(venda => {
    let percentual = 0;

    // Define o percentual da comissão
    if (venda.valor < 100) {
        percentual = 0;
    } else if (venda.valor < 500) {
        percentual = 0.01;
    } else {
        percentual = 0.05;
    }

    // Calcula a comissão da venda
    const comissao = venda.valor * percentual;

    // Cria o vendedor caso ainda não exista
    if (!comissoes[venda.vendedor]) {
        comissoes[venda.vendedor] = 0;
    }

    // Soma a comissão
    comissoes[venda.vendedor] += comissao;
});

// Exibe o resultado
for (const vendedor in comissoes) {
    console.log(
        `${vendedor}: R$ ${comissoes[vendedor].toFixed(2)}`
    );
}