export const carrinho = {
  produto: '.product',
  botaoAdicionar: '.single_add_to_cart_button',
  mensagemSucesso: '.woocommerce-message',
  botaoCarrinho: '.dropdown-toggle > .text-skin > .icon-basket',
  itemCarrinho: '.dropdown-toggle > .mini-cart-items',
  abrirCarrinhoCompras :'#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart',
  
  // Criamos uma lista de atributos para cada um dos 3 produtos
  // Altere os valores abaixo de acordo com o que existe na loja para cada item
  atributos: [
    { tamanho: '.button-variable-item-XS', cor: '.button-variable-item-Orange' },   // Produto 0
    { tamanho: '.button-variable-item-L',  cor: '.button-variable-item-Red' },    // Produto 1
    { tamanho: '.button-variable-item-M',  cor: '.button-variable-item-Black' }, // Produto 2 (Laranja aqui)
  ]

}
