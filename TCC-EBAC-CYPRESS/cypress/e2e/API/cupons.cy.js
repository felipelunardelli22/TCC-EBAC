describe('História de Usuário [US-0003] – API de cupons', () => {

    const authorization = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' 

    it('CT-007 — Deve listar todos os cupons cadastrados com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: { authorization }
        }).should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.be.an('array')
        })
    });

    it('CT-009 — Deve impedir o cadastro de cupom com código duplicado', () => {
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: { authorization },
            failOnStatusCode: false, 
            body: {
                "code": "10OFF", 
                "amount": "10",
                "discount_type": "fixed_cart"
            }
        }).should((response) => {
            expect(response.status).to.equal(400) 
            expect(response.body.message).to.contain('O código de cupom já existe')
        })
    });
    it('CT-008 — Deve cadastrar um novo cupom com sucesso', () => {
    // Gera um código único (ex: CUPOM-123) para não dar erro de duplicidade
    const codigoCupom = `CUPOM-${Math.floor(Math.random() * 10000)}`;

    cy.request({
      method: 'POST',
      url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
      headers: { 
        authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' 
      },
      body: {
        "code": codigoCupom,
        "amount": "10.00",
        "discount_type": "fixed_cart",
        "description": "Cupom criado via automação Cypress"
      }
    }).should((response) => {
      // Validações de sucesso conforme as boas práticas do projeto [cite: 182]
      expect(response.status).to.equal(201); // 201 significa "Criado"
      expect(response.body.code).to.equal(codigoCupom.toLowerCase());
      expect(response.body).to.have.property('id');
    });
  });
});