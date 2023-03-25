describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Javascript');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
          .should('contain', 'Formação Aprenda a programar em JavaScript com foco no back-end');
    })
})