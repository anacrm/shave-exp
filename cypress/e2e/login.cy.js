/// <reference types="cypress"/>
import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'
import header from '../support/components/header'


describe('Login', () => {
    context('When I fill out a form', () => {
        const user = {
            name: 'Ana',
            email: 'anamedeiros18@gmail.com',
            password: '123Mudar'
        }
        it('Should login successfully', () => {

            loginPage.submit(user.email, user.password)
            shaversPage.header.userShouldBeLoggedIn(user.name)
        })
        it('Should not login with wrong password', () => {

            user.password = 123456

            loginPage.submit(user.email, user.password)

            const errorMessage = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(errorMessage)

        })
        it('Should not login with wrong email', () => {

            user.email = 'ana404@gmail.com'

            loginPage.submit(user.email, user.password)

            const errorMessage = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(errorMessage)

        })
        it('Should not login with invalid email', () => {

            user.email = 'anamedeiros18gmail.com'

            loginPage.submit(user.email, user.password)
        })

    })
}) 