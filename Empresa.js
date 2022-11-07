let nomeProjeto = [], orcamento = []







function SolicitarNomeEOrcamento(){
    nomeProjeto.push(prompt("Qual nome do Projeto?"))
    orcamento.push(prompt("Qual o orçamento ?"))
    return nomeProjeto, orcamento
}

SolicitarNomeEOrcamento()