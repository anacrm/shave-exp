/// <reference types="cypress"/>

describe('Login', () => {
    context('When I fill out a form', () => {
        const user = {
            name: 'Ana',
            email: 'anamedeiros18@gmail.com',
            password: '123Mudar'
        }
        it('Should login successfully', () => {
            cy.visit('/')
            cy.get('input[placeholder="Seu email"]').type(user.email)
            cy.get('input[placeholder*="senha"]').type(user.password)
            cy.contains('button', 'Entrar').click()
            cy.get('.logged-user div a')
                .should('be.visible')
                .should('have.text', 'Olá, ' + user.name)
        })
        it('Should not login with wrong password', () => {

            user.password = 123456

            cy.visit('/')
            cy.get('input[placeholder="Seu email"]').type(user.email)
            cy.get('input[placeholder*="senha"]').type(user.password)
            cy.contains('button', 'Entrar').click()

            const errorMessage = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            cy.get('.notice-container')
                .should('be.visible')
                .find('.error p')
                .should('have.text', errorMessage)

        })
        it('Should not login with wrong email', () => {

            user.email = 'ana404@gmail.com'

            cy.visit('/')
            cy.get('input[placeholder="Seu email"]').type(user.email)
            cy.get('input[placeholder*="senha"]').type(user.password)
            cy.contains('button', 'Entrar').click()

            const errorMessage = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            cy.get('.notice-container')
                .should('be.visible')
                .find('.error p')
                .should('have.text', errorMessage)

        })
        it('Should not login with invalid email', () => {

            user.email = 'anamedeiros18gmail.com'

            cy.visit('/')
            cy.get('input[placeholder="Seu email"]').type(user.email)
            cy.get('input[placeholder*="senha"]').type(user.password)
            cy.contains('button', 'Entrar').click()



        })

    })
}) 