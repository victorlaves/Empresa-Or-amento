let nomeProjeto = [], orcamento = []
let repetir = true

function SolicitarNomeEOrcamento(){
    nomeProjeto.push(prompt("Qual nome do Projeto?"))
    orcamento.push(prompt("Qual o orçamento ?"))
    return nomeProjeto, orcamento
}

function DespesasOuReceitas(nameP, valor, tipoValor){
    let index = nomeProjeto.indexOf(nameP)
    if(tipoValor == "D" && orcamento[index] - valor > 0){
        orcamento[index] == orcamento - valor
    }
    else if (tipoValor == "D" && orcamento[index] - valor < 0){
    console.log("Despesas maior que o saldo")
    }
    else if (tipoValor == "R"){
        orcamento[index] = orcamento[index] + valor
    }

    console.log("Projeto ", nomeProjeto[index], "Saldo Disponivel", orcamento[index])
    return nomeProjeto, orcamento
}

    while(repetir)
    {
        let opcoes = prompt("1 - Adicionar Projeto, 2 - Adicionar Despesas ou Receita, 3 - Finalizar")
        if(opcoes == 1)
        SolicitarNomeEOrcamento()
        else if(opcoes == 2){
        let nameP = prompt("Nome do projeto :")
        let valor = prompt("Valor :")
        let tipoValor = prompt("Tipo do valor: D = Despesas OU R = Receita") 
        DespesasOuReceitas(nameP, valor, tipoValor)
        }
        else 
        repetir = false
    }