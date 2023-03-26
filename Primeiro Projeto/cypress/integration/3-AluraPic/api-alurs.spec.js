describe('Buscar fotos e dados', ()=> {

    it.only('buscar fotos da mariana', ()=> {

        const tempoEsperado = Math.round() * 3000;
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/mariana/photos'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[0]).to.have.property('description')
           expect(res.body[0].description).to.be.equal('Farol iluminado') 
        }

        )
    })


    it('fazer login da maariana', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body).to.have.property('id')
           expect(res.body.id).to.be.equal(1) 
           expect(res.body).to.have.property('email')
           expect(res.body.email).to.be.equal("mariana@alurapic.com.br") 
        }

        )
    })

})