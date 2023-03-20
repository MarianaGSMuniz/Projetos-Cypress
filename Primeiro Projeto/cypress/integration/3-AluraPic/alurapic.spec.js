const { expect } = require("chai");

describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('verifica mensagens validacao', () => {
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it.only('fazer login valido', () => {
        cy.get('input[formcontrolname="userName"]').type('Flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button [type="submit]').click();
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('fazer login invalido', () => {
        cy.get('input[formcontrolname="userName"]').type('Miagy');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button [type="submit]').click();
        cy.on('Windows:alert', (str) => {
                expect(str).to.equal('Invalid user name or password')

        })
    })
})