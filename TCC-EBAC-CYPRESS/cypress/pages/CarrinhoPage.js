class CarrinhoPage {

  // ===== LOCATORS =====
  produto = '.product'
  botaoAdicionar = '.single_add_to_cart_button'
  mensagemSucesso = '.woocommerce-message'
  botaoCarrinho = '.dropdown-toggle > .text-skin > .icon-basket'
  itemCarrinho = '.dropdown-toggle > .mini-cart-items'
  abrirCarrinhoCompras = '#cart .view-cart'

  atributos = [
    { tamanho: '.button-variable-item-XS', cor: '.button-variable-item-Orange' },
    { tamanho: '.button-variable-item-L',  cor: '.button-variable-item-Red' },
    { tamanho: '.button-variable-item-M',  cor: '.button-variable-item-Black' }
  ]

  // ===== ACTIONS =====

  adicionarProduto(index = 0) {
    const attr = this.atributos[index]

    cy.get(attr.tamanho).click()
    cy.get(attr.cor).click()
    cy.get(this.botaoAdicionar).click()
  }

  validarMensagemSucesso() {
    cy.get(this.mensagemSucesso).should('be.visible')
  }

  abrirCarrinho() {
    cy.get(this.botaoCarrinho).click()
  }

  acessarCarrinho() {
    cy.get(this.abrirCarrinhoCompras).click()
  }

}

export default new CarrinhoPage()