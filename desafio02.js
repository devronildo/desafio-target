const dados = {
    estoque: [
        {
            codigoProduto: 101,
            descricaoProduto: "Caneta Azul",
            estoque: 150
        },
        {
            codigoProduto: 102,
            descricaoProduto: "Caderno Universitário",
            estoque: 75
        },
        {
            codigoProduto: 103,
            descricaoProduto: "Borracha Branca",
            estoque: 200
        },
        {
            codigoProduto: 104,
            descricaoProduto: "Lápis Preto HB",
            estoque: 320
        },
        {
            codigoProduto: 105,
            descricaoProduto: "Marcador de Texto Amarelo",
            estoque: 90
        }
    ]
};

// Lista para armazenar as movimentações
const movimentacoes = [];

// Função para realizar movimentação
function movimentarEstoque(codigoProduto, tipo, quantidade, descricao) {

    // Procura o produto pelo código
    const produto = dados.estoque.find(
        produto => produto.codigoProduto === codigoProduto
    );

    // Verifica se o produto existe
    if (!produto) {
        console.log("Produto não encontrado!");
        return;
    }

    // Verifica se a quantidade é válida
    if (quantidade <= 0) {
        console.log("A quantidade deve ser maior que zero!");
        return;
    }

    // Verifica o tipo da movimentação
    if (tipo !== "entrada" && tipo !== "saida") {
        console.log("Tipo de movimentação inválido!");
        console.log("Utilize 'entrada' ou 'saida'.");
        return;
    }

    // Verifica se existe estoque suficiente para saída
    if (tipo === "saida" && quantidade > produto.estoque) {
        console.log("Estoque insuficiente!");
        return;
    }

    // Gera um número identificador único
    const id = movimentacoes.length + 1;

    // Atualiza o estoque
    if (tipo === "entrada") {
        produto.estoque += quantidade;
    } else {
        produto.estoque -= quantidade;
    }

    // Registra a movimentação
    movimentacoes.push({
        id: id,
        codigoProduto: codigoProduto,
        produto: produto.descricaoProduto,
        tipo: tipo,
        quantidade: quantidade,
        descricao: descricao
    });

    // Mostra o resultado
    console.log("--------------------------------");
    console.log("Movimentação realizada!");
    console.log("ID:", id);
    console.log("Produto:", produto.descricaoProduto);
    console.log("Tipo:", tipo);
    console.log("Quantidade:", quantidade);
    console.log("Descrição:", descricao);
    console.log("Estoque atual:", produto.estoque);
    console.log("--------------------------------");
}


// EXEMPLOS DE MOVIMENTAÇÕES

movimentarEstoque(
    101,
    "entrada",
    50,
    "Entrada de novas canetas no depósito"
);

movimentarEstoque(
    101,
    "saida",
    30,
    "Saída de canetas para venda"
);

movimentarEstoque(
    102,
    "saida",
    10,
    "Saída de cadernos para venda"
);