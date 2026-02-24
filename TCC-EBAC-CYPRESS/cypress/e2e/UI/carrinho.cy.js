import  carrinho  from '../../pages/CarrinhoPage'

describe('[US-0001] - Adicionar múltiplos produtos ao carrinho', () => {

  it('CT-001 - Deve adicionar 3 produtos diferentes ao carrinho com sucesso', () => {
    
    cy.visit('http://lojaebac.ebaconline.art.br')

    const produtos = [0, 1, 2]

    produtos.forEach((index) => {
      cy.get(carrinho.produto).eq(index).click().wait(5000)
      cy.get(carrinho.atributos[index].tamanho).click({force :true})
      cy.get(carrinho.atributos[index].cor).click({force :true}).wait(5000)
      cy.get(carrinho.botaoAdicionar).click().wait(5000)

      cy.get(carrinho.mensagemSucesso)
        .should('contain', 'foi adicionado no seu carrinho')

      cy.visit('/')
    })

    cy.get(carrinho.botaoCarrinho).click(),
    cy.get(carrinho.abrirCarrinhoCompras).click()
    
  })
})