import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Test Scenario - Login User', () => {
    beforeEach('Go to login page', async () => {
        await LoginPage.open()
    })
    afterEach('Clear Session', async () => {
        await LoginPage.clearSession()
    })
    it('As a user, I want to log in using a valid and registered email and password', async () => {
        await LoginPage.login('hipster@dispostable.com', 'passwordBenar123*')
        await expect(SecurePage.successMessage).toBeExisting()
        await expect(SecurePage.successMessage).toHaveTextContaining(
            'Selamat datang di Facebook, Hipster')
    })
    it('As a user, I want to make sure the login is using the wrong password', async () => {
        await LoginPage.login('hipster@dispostable.com', 'passwordSalah_nich')
        await expect(SecurePage.alertMessage).toBeExisting()
        await expect(SecurePage.alertMessage).toHaveTextContaining(
            "The password that you've entered is incorrect. ")
    })
    it('As a user, I want to make sure the login uses an unregistered email', async () => {
        await LoginPage.login('emailsalahnih@dispostable.com', 'passwordBenar123*')
        await expect(SecurePage.alertMessage).toBeExisting()
        await expect(SecurePage.alertMessage).toHaveTextContaining(
            "The email address you entered isn't connected to an account. ")
    })
})


