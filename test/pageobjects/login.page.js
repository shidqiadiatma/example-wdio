import Page from './page.js';

class LoginPage extends Page {
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#pass');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async clearSession() {
        await browser.deleteAllCookies();
      }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
